import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
}) => {
  return (
    <div className="border shadow bg-white p-6 rounded-xl hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-blue-600">{name}</h2>
      <p className="text-gray-600">@{username}</p>

      <div className="mt-3 text-sm text-gray-700">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> {website}</p>
        <p><strong>Company:</strong> {company.name}</p>
      </div>

      <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
        View Profile
      </button>
    </div>
  );
};

export default UserCard;
