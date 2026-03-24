export const HistoryItem = ({
  date,
  description,
  change,
}: {
  date: String;
  description: String;
  change: String;
}) => {
  return (
    <div className="flex flex-col -space-y-2">
      <p className="font-light text-gray-700">{date}</p>
      <p className="font-normal text-gray-900">{description}</p>
      <p className="font-normal text-yellow-600">
        <i>{change}</i>
      </p>
    </div>
  );
};
