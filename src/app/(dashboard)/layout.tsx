// import Menu from "@/components/Menu";
// import Navbar from "@/components/Navbar";
// import Image from "next/image";
// import Link from "next/link";

// export default function DashboardLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) { 
//   return (
//     <div className="h-screen flex flex-col">
//       {/* TOP - Navbar */}
//         <Navbar />

//       <div className="flex flex-1 overflow-hidden">
//         {/* LEFT - Logo and Menu */}
//         <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 overflow-y-auto bg-white">
//           <Link
//             href="/" 
//             className="flex items-center justify-center lg:justify-start gap-2 mb-4"
//           >
//             <Image src="/logo.png" alt="logo" width={32} height={32} />
//             <span className="hidden lg:block">BAKUDAPA</span>
//           </Link>
//           <Menu />
//         </div>

//         {/* RIGHT - Main Content */}
//         <div className="flex-1 p-4 bg-[#F7F8FA] overflow-y-auto">
//           {children}
//         </div> 
//       </div>
//     </div>
//   );
// }

// import Menu from "@/components/Menu";
// import Navbar from "@/components/Navbar";
// import Image from "next/image";
// import Link from "next/link";

// export default function DashboardLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) { 
//   return (
//     <div className="h-screen flex flex-col">
//       <Navbar />

//       <div className="flex flex-1 overflow-hidden">
//         {/* LEFT - Logo and Menu */}
//         <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 overflow-y-auto bg-white">
//           <Link
//             href="/" 
//             className="first-of-type:lex items-center justify-center lg:justify-start gap-2 mb-4"
//           >
//             <Image src="/logo.png" alt="logo" width={32} height={32} />
//             <span className="hidden lg:block">BAKUDAPA</span>
//           </Link>
//           <Menu />
//         </div>s

//         {/* RIGHT - Main Content */}
//         <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
//           {children}
//         </div> 
//       </div>
//     </div>
//   );
// }



import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT - Logo and Menu */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link href="/" 
        className="flex items-center justify-center lg:justify-start gap-2"
        >
        <Image src="/logo-bakudapa.png" alt="logo" width={32} height={32}/>
        <span className="hidden lg:block font-bold">BAKUDAPA</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]  bg-slate-200 overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}