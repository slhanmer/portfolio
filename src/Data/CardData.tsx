import { useGlobalState } from '../Contexts/GlobalStateContext';
import { SocialMediaIcons, Timeline } from '../Components';
import { Spacer } from '../Components';
import resumePDF from '../Assets/SimonHanmerResume.pdf';

// Custom hook to provide data for the cards
const useCardData = () => {
  const { aboutRef, projectsRef, contactRef } = useGlobalState();

  const cards = [
    { id: 1, content: 
      <>
     <p>Hi, I'm Simon Hanmer, a former chef turned developer based in Brisbane, Australia.</p>
     <p>Here is a brief overview of my 'journey' - cringe reality TV references out of the way now I promise.</p>
      <Timeline />
      <Spacer rem={2}/>
      <a href={resumePDF} target='_blank' rel="noreferrer">View my full resume</a>
      </>, 
      ref: aboutRef 
    },
    { id: 2, content: <>My Projects</>, ref: projectsRef },
    { id: 3, content: 
      <>
      <p>Want to discuss a project, or just want to chat about shared interests, feel free to reach out.</p>
      <h3>What Can We Talk About?</h3>
      <ul>
        <li>Web Development & Software: From TypeScript and React to Python and Django, I'm passionate about creating user-friendly digital solutions.</li>
        <li>Cooking: As a former chef, I still enjoy whipping up culinary delights. If you need a recipe or cooking tip, I'm here for you!</li>
        <li>Sports: I'm an avid sports enthusiast who loves playing squash, bouldering, and futsal. I'm currently learning the intricacies of Bridge, and I enjoy watching NRL, Cricket, and Football.</li>
        <li>Gaming: My current gaming obsession is Project Zomboid, but I'm also into any strategic or survival game from indie developers. And yes, I'm a secret NRL SuperCoach and Fantasy sports nerd!</li>
        <li>Life in General: Sometimes, the best conversations are about everything and nothing.</li>
      </ul>
      <SocialMediaIcons />
      </>
      , ref: contactRef 
    }
  ];

  return cards;
};

export default useCardData;
