'use client'
import { SnackbarProvider } from "notistack";
import LoginPage from "./pages/login/page";
import Image from "next/image";

export default function Home() {
  return (
    <SnackbarProvider maxSnack={3}>
      <LoginPage />
    </SnackbarProvider>
  );
}
