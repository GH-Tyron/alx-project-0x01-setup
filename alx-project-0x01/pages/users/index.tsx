import UserCard from "@/components/common/UserCard";

const UsersPage = ({ posts }: any) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Users</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {posts.map((user: any) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;

