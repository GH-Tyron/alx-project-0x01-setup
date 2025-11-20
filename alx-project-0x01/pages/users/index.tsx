import { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

interface UsersPageProps {
  posts: UserData[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-semibold">Users</h1>

          <button
            className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition"
            onClick={() => setIsModalOpen(true)}
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {posts.map((user: UserData) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>

      {/* Modal */}
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
