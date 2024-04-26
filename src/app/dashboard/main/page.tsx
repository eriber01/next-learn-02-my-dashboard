import { HeaderPage, WidgetsGrid } from "@/components";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
};

export default function MainPage() {
  return (
    <div className="text-black">
      <HeaderPage name="Dashboard" description="Informacion general" />
      <div className="flex flex-wrap p-2 items-center justify-center">
        <WidgetsGrid />
      </div>
    </div>
  );
}