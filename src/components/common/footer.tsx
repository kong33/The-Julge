import Image from 'next/image';

import emailImage from '../../public/images/envelope-square.png';
import facebookImage from '../../public/images/facebook-square.png';
import instagramImage from '../../public/images/instagram.png';

function footer() {
  return (
    <footer>
      <div>
        <p>©codeit - 2023</p>
        <div>
          <p>Privacy Policy</p>
          <p>FAQ</p>
        </div>
        <div>
          <div>
            <Image src={emailImage} alt="email" />
          </div>
          <div>
            <Image src={facebookImage} alt="facebook" />
          </div>
          <div>
            <Image src={instagramImage} alt="instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
