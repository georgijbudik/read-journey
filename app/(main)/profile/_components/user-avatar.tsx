"use client";

import { useState, useEffect } from "react";

import { updateImage } from "@/app/api/user-actions";

const UserAvatar = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  useEffect(() => {
    const update = async () => {
      if (!file) return;
      const formData = new FormData();
      formData.append("avatar", file);

      await updateImage(formData);
    };

    update();
  }, [file]);

  return <input type="file" name="avatar" onChange={handleFileChange} />;
};

export default UserAvatar;
