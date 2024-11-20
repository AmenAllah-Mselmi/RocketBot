import TeamCard from './Team_Card';
import Image from '../assets/Team/AmenAllah-TunisiaDevDays.png';
import ayoub from "../assets/Team/ayoub.jpg";
import amal from "../assets/Team/amal.jpg";
import dhia from "../assets/Team/dhia.jpg";
import dali from "../assets/Team/dali.jpg";
import walid from "../assets/Team/walid.jpg";
import yasmine from "../assets/Team/yasmine.jpg";
import khadija from "../assets/Team/khadija.jpg";
import ela from "../assets/Team/ela.jpg";
import aziz from "../assets/Team/aziz.jpg";
import maysem from "../assets/Team/maysem.jpg"
import nousaiba from "../assets/Team/nousaiba.jpg"
const team = [
  {
    name: 'AmenAllah Mselmi',
    image: Image,
    position: 'Team Leader All-Terrain ',
  },
  {
    name: 'Aziz Chaouch',
    image: aziz,
    position: 'Project Manager',
  },
  {
    name: 'Ahmed Dhia Zarrouk',
    image: dhia,
    position: 'Organization Manager',
  },
  {
    name: 'Noussaiba Maoua',
    image:nousaiba ,
    position: 'Program Manager',
  },
  {
    name: 'Amal Msalmi',
    image: amal,
    position: 'Media Manager',
  },
  {
    name: 'Khadija Jaoua',
    image: khadija,
    position: 'Sponsoring Manager',
  },
  {
    name: 'Ela Rouis',
    image: ela,
    position: 'Ambassadors Coordinator',
  },
  {
    name: 'Walid Masri',
    image: walid,
    position: 'Team Leader Rocket League',
  },
  {
    name: 'Maysem Guerbej',
    image: maysem,
    position: 'Team Leader Junior',
  },
  {
    name: 'Yasmine Massaoudi',
    image: yasmine,
    position: 'Team Leader Line Follower',
  },
  {
    name: 'Mohamed Ali Yacoubi',
    image: dali,
    position: 'General Secretary',
  },
  {
    name: ' Ayoub Dhahri',
    image: ayoub,
    position: 'Logistics Manager',
  }
];

export default function Team() {
  return (
    <section id="team"  className="my-16 mx-auto container w-9/12 h-fit">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-purple-700 mb-3 font-mono">Our Team</h1>
          <p className="text-gray-600">Meet the dedicated individuals behind our competition.</p>
        </div>
        <div   className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-20 p-4 h-fit  xl:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.position} infos={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
