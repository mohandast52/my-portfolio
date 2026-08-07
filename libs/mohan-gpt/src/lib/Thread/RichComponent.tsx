// Maps an intent's `comp` to the card it renders. Both the chat thread and the
// classic view go through these same components.

import {
  ABOUT,
  ACHIEVEMENTS,
  AVATAR_SRC,
  CONTACT,
  EXPERIENCE,
  FEATURED_PROJECTS,
  PROJECTS,
  SKILL_GROUPS,
} from '../content';
import {
  AboutCard,
  AchievementCardGrid,
  ContactCard,
  ExperienceTimeline,
  ProjectCardGrid,
  SkillsGrid,
} from '../cards';
import type { CompType } from '../types';

interface RichComponentProps {
  type: CompType;
  onViewClassic: () => void;
}

const RichComponent = ({ type, onViewClassic }: RichComponentProps) => {
  switch (type) {
    case 'about':
      return <AboutCard data={ABOUT} photo={AVATAR_SRC} />;
    case 'timeline':
      return <ExperienceTimeline items={EXPERIENCE} />;
    case 'projects':
      return <ProjectCardGrid items={FEATURED_PROJECTS} />;
    case 'allProjects':
      return <ProjectCardGrid items={PROJECTS} />;
    case 'skills':
      return <SkillsGrid groups={SKILL_GROUPS} />;
    case 'achievements':
      return <AchievementCardGrid items={ACHIEVEMENTS} />;
    case 'contact':
      return <ContactCard contact={CONTACT} onViewClassic={onViewClassic} />;
    default:
      return null;
  }
};

export default RichComponent;
