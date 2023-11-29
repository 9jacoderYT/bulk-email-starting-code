import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function DeveloperComponent() {
  return (
    <div className="max-w-xl mx-auto">
      <div className="p-4 mt-5 md:flex-1">
        <div className="mb-4">
          <a href="#" className="relative block">
            <img
              alt="profil"
              src="https://avatars.githubusercontent.com/u/117041814?v=4"
              className="object-cover rounded-full h-40 w-40 "
            />
          </a>
        </div>
        <div className="text-left">
          <p className="text-2xl text-gray-800 dark:text-white">
            Creator : 9jacoder
          </p>
          <p className="text-xl font-light text-gray-500 dark:text-gray-200">
            Software Developer & Youtuber
          </p>
          <p className="max-w-xs py-4 font-light text-gray-500 text-sm dark:text-gray-400">
            If you wish to unlock more features or to customize this
            application, please contact me through one of the following options
          </p>
        </div>
        <div className="flex justify-between pt-8 text-gray-500 border-t border-gray-200 w-44">
          <a href="https://www.instagram.com/9jacoder.tech">
            <InstagramIcon className="text-orange-500 text-4xl" />
          </a>

          <a href="https://www.youtube.com/channel/UCjl1EQNMz3WIRWk1HmpFFNA">
            <YouTubeIcon className="text-red-500 text-4xl" />
          </a>

          <a href="https://github.com/9jacoderYT">
            <GitHubIcon className=" text-4xl text-purple-600" />
          </a>
        </div>
      </div>
    </div>
  );
}
