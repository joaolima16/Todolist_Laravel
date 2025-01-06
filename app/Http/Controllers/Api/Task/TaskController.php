<?php

namespace App\Http\Controllers\Api\Task;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function getTasks($id)
    {
        try {
            $tasks = Task::where('user_id', $id)->get();
            return response()->json([
                'status' => true,
                'tasks' => $tasks->count() > 0 ? $tasks : "Não há tarefas"
            ], 201);
        } catch (\Exception $ex) {
            return response()->json([
                'status' => false,
                'msg' => $ex->getMessage()
            ], 400);
        }
    }
    public function createTask($id, TaskRequest $request)
    {
        try {
            $data = $request->only('name', 'description', 'status');
            $task = Task::create([
                'name' => $data['name'],
                'description' => $data['description'],
                'status' => $data['status'],
                'user_id' => $id
            ]);

            return response()->json([
                'status' => true,
                'msg' => 'Tarefa adicionada', 
                'task' => $task
            ], 201);
        } catch (\Exception $ex) {
            return response()->json([
                'status' => false,
                'msg' => $ex->getMessage()
            ], 400);
        }
    }
}
