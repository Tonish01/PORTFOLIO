import IconCover from "./IconCover";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Connect = () => {
  return (
    <div className="flex gap-x-4">
      <IconCover
        icon={<FaGithub className="" />}
        link="https://github.com/Tonish01"
      />
      <IconCover
        icon={<FaLinkedin className="" />}
        link="https://www.linkedin.com/in/tonish-8b2224270/"
      />
      <IconCover
        icon={<FaTwitter className="" />}
        link="https://x.com/Tonish200"
      />
      <IconCover
        icon={<SiLeetcode className="" />}
        link="https://leetcode.com/u/Tonish01/"
      />
    </div>
  );
};

export default Connect;
