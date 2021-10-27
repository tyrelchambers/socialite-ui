import React from "react";
import Avatar from "../../components/Avatar/Avatar";
import { fullName } from "../../utils/fullName";

const Profile = ({ user }) => {
  return (
    <>
      <h1 className="text-3xl">Profile</h1>
      <main className="mt-10">
        <Avatar
          size="lg"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          className="mb-4"
        />
        <h2 className="text-xl ">{fullName(user)}</h2>
      </main>
    </>
  );
};

export default Profile;
