import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import librarylogo from "../../assets/book-4986.svg"
export default function Footers() {
  const date = new Date();
  const year = date.getFullYear();
 
  return (
    <div>
<Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='mx-auto md:m-0'>
            <Footer.Brand
              href="/"
              src={librarylogo}
              alt="Library logo"
              name="Scientia"
              className='p-2'
            />
          </div>
          <div className="grid grid-cols-3 gap-8 sm:mt-4 ml-8 md:ml-0 sm:grid-cols-3 sm:gap-6 m-2">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Library</Footer.Link>
                <Footer.Link href="#">Scientia</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow me" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/123Somrat">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex flex-col items-center sm:justify-between p-4">
          <Footer.Copyright href="/" by="somrat™" year={year} className='my-2'/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center md:my-2">
            <Footer.Icon href="/" icon={BsFacebook} />
            <Footer.Icon href="/" icon={BsInstagram} />
            <Footer.Icon href="/" icon={BsTwitter} />
            <Footer.Icon href="/" icon={BsGithub} />
            <Footer.Icon href="/" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>


    </div>
  )
}
