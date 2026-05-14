import React from 'react';

export default function Logo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <img 
      src="https://scontent.fkhi21-1.fna.fbcdn.net/v/t39.30808-6/608536586_122097006855196227_5223868069826049798_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=tUWnq63wrUAQ7kNvwFK_tKg&_nc_oc=AdoN8c_ow1M_qiM1VZ9YiMaY6CtHYM_V7ZMUqXcgkzSKV3UuUOGbn4ddQ-D6HIW9E2c&_nc_zt=23&_nc_ht=scontent.fkhi21-1.fna&_nc_gid=ZfWsfqa_emnxIcWCOL_lOQ&_nc_ss=7b289&oh=00_Af5Ww_ErH1YbaTVd_ychN9lw-HffDNwTqau5kUmfClb8qQ&oe=6A0B4B13"
      alt="Dental Studio by Dr Zain Ali Logo"
      className={`${className} object-cover`}
    />
  );
}
