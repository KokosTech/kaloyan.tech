import GoBackButton from "@/components/go-back-button";

const GoBackButtonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-full p-8 sm:p-12 md:p-20 md:pt-26!">
      <GoBackButton />
      {children}
    </div>
  );
};

export default GoBackButtonLayout;
