import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
});

const Footer = () => {
    return (
      <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-12 flex justify-between">
          <span className={`text-muted ${greatVibes.className}`}>Laurence.Page</span>
          <p className="text-slate-700">All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;