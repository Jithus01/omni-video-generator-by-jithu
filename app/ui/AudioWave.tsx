export const AudioWave = () => {
  const BAR_HEIGHTS = [
    0.5, 0.7, 0.9, 0.4, 0.8, 1.0, 0.6, 0.9, 0.7, 0.5,
    0.5, 0.7, 0.9, 0.6, 1.0, 0.8, 0.4, 0.9, 0.7, 0.5
  ];

  return (
    <div className="flex justify-center items-end h-32 space-x-1.5 md:space-x-2">
      {BAR_HEIGHTS.map((heightFactor, index) => (
        <div
          key={index}
          style={{ height: `${heightFactor * 100}%` }}
          className="w-1.5 md:w-2 rounded-full bg-white/30"
        />
      ))}
    </div>
  );
};
