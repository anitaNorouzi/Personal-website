
import { IoLogoLinkedin } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
function ContactPage() {
  return (
    <div>
      <ul className="font-edu text-left text-xl text-notebookCoverDark">
        <li className="inline ">
          <IoCall className="inline mr-4" />
          +98 921 402 9703
        </li>
        <li className="pt-4 ">
          <MdEmail className="inline mr-4 " />
          anita.norouzi01@gmail.com
        </li>
        <li className="pt-4">
          <a
            href="https://www.linkedin.com/in/anita-norouzi/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex items-center"
          >
            <IoLogoLinkedin className="inline mr-4" />
            linkedin.com/in/anita-norouzi/
          </a>
        </li>

        <li className="pt-4">
          <a
            href="https://github.com/anitaNorouzi"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex items-center"
          >
            <IoLogoGithub className="inline mr-4" />
            https://github.com/anitaNorouzi
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactPage;
