"use client";

// import { IconHome } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <button
      onClick={handleGoBack}
      className="absolute gap-3 aspect-square! hover:text-white text-white/40 cursor-pointer bottom-40 md:bottom-8 left-4 z-10 flex items-center justify-center border border-gray-700 hover:border-gray-500 rounded-full p-3 bg-[#161616]/60 backdrop-blur-2xl transition-colors duration-300 shadow-lg"
    >
      <p className="text-xl">/</p>
    </button>
  );
};

export default GoBackButton;
