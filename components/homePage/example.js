import { FavoriteRounded, MarkChatRead } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Example() {
  return (
    <div>
      <p className="text-4xl mt-10" id="useage">
        How to use MojoMails
      </p>

      <div className="mt-10">
        <h1 className="font-bold text-2xl">
          Step 1 :{" "}
          <span className="font-normal text-lg">Select a Template</span>
        </h1>
        <img src="/examples/1.png" />
        <br />
        <div>
          Different templates so you can interact with emails differently,
          select the one you like the most, more templates will be added to the
          site later on <FavoriteRounded className="text-red-500" />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="font-bold text-2xl mb-5">
          Step 2 : <span className="font-normal text-lg"></span>
        </h1>
        <img src="/examples/2.png" />
        <br />
        <div>
          1. <b>Email Service</b> Select the email service that you will use to
          send your emails, two emails services are being supported <b>Gmail</b>{" "}
          & <b>Mail.ru</b>, with more to be added in future.
          <br />
          <br />
          2. <b>Email Address</b> You will need an email address to send bulk
          email messages
          <br />
          <br />
          3. <b>Email App Password</b> This is gotten from your email service,
          on gmail you can navigate to App Password, this password allows third
          party services like mojomail, to use your email on your behalf.
          <img src="/examples/3.png" className="border m-5 " />
          <b>Mail.ru App Password settings</b>
          <img src="/examples/4.png" className="border m-5 " />
          <b>Gmail App Password settings</b>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="font-bold text-2xl">
          Step 3 : <span className="font-normal text-lg">Upload Contacts</span>
        </h1>

        <img src="/examples/5.png" className="border m-5 " />

        <br />
        <div>
          Upload a .txt file containing email address you would like to send
          your email to, it doesn't matter how they are arranged in the file, as
          long as emails are present, the code will automatically pick the email
          address.
        </div>

        <h1 className="mt-5">
          If you wish to customise the way this works, please message me on{" "}
        </h1>
        <div className="flex justify-between text-gray-500 w-44">
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

        <p className="mt-10">
          And your good to go{" "}
          <MarkChatRead className="text-green-400 text-4xl" />
        </p>
      </div>

      {/* Video Example */}

      {/* Text Example */}
    </div>
  );
}
