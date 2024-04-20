type PerspectiveTextProps = {
  label: string;
};

const PerspectiveText: React.FC<PerspectiveTextProps> = ({ label }) => {
  return (
    <div className="perspectiveText z-50">
      <p className="relative z-[5] font-semibold 2xl:text-[20px]">{label}</p>
      <p className="relative z-[5] font-semibold 2xl:text-[20px]">{label}</p>
    </div>
  );
};

export default PerspectiveText;
