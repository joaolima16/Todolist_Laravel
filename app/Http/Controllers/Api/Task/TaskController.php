<?php

namespace App\Http\Controllers\Api\Task;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function getTasks($id)
    {
        $tasks = Task::where('user_id', $id)->get();
        return $tasks;
    }
}
