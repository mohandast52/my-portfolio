// The classic résumé view: one scrollable page laying out the exact same rich
// components the chat renders inline — for recruiters, print, and crawlers.

import {
  AboutCard,
  AchievementCardGrid,
  ContactCard,
  ExperienceTimeline,
  ProjectCardGrid,
  SkillsGrid,
} from '../cards';
import {
  ABOUT,
  ACHIEVEMENTS,
  AVATAR_SRC,
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
} from '../content';
import { IconArrowLeft, IconMoon, IconSun } from '../icons';
import type { Theme } from '../types';
import * as S from './styles';

interface ClassicProps {
  theme: Theme;
  onBackToChat: () => void;
  onToggleTheme: () => void;
}

const Classic = ({ theme, onBackToChat, onToggleTheme }: ClassicProps) => (
  <S.Scroll data-testid="classic-view">
    <S.Bar>
      <S.BackLink type="button" onClick={onBackToChat}>
        <IconArrowLeft />
        <span>Chat with MohanGPT instead</span>
      </S.BackLink>
      <S.ThemeButton type="button" onClick={onToggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? <IconSun size={17} /> : <IconMoon size={17} />}
      </S.ThemeButton>
    </S.Bar>

    <S.Column>
      <S.Hero>
        <S.HeroRow>
          <S.HeroMonogram aria-hidden>M</S.HeroMonogram>
          <S.HeroText>
            <S.HeroName>{PROFILE.name}</S.HeroName>
            <S.HeroIdentity>{PROFILE.identity}</S.HeroIdentity>
          </S.HeroText>
        </S.HeroRow>
        <S.HeroBio>{PROFILE.bio}</S.HeroBio>
      </S.Hero>

      <S.Section>
        <S.Heading>About</S.Heading>
        <AboutCard data={ABOUT} photo={AVATAR_SRC} />
      </S.Section>

      <S.Section>
        <S.Heading>Experience</S.Heading>
        <ExperienceTimeline items={EXPERIENCE} />
      </S.Section>

      <S.Section>
        <S.Heading>Education</S.Heading>
        <S.EducationRow>
          <S.EducationDegree>{EDUCATION.degree}</S.EducationDegree>
          <S.EducationSchool>{EDUCATION.school}</S.EducationSchool>
          <S.EducationMeta>{`${EDUCATION.period} · ${EDUCATION.detail}`}</S.EducationMeta>
        </S.EducationRow>
      </S.Section>

      <S.Section>
        <S.Heading>Projects</S.Heading>
        <ProjectCardGrid items={PROJECTS} min={240} />
      </S.Section>

      <S.Section>
        <S.Heading>Skills</S.Heading>
        <SkillsGrid groups={SKILL_GROUPS} />
      </S.Section>

      <S.Section>
        <S.Heading>Achievements</S.Heading>
        <AchievementCardGrid items={ACHIEVEMENTS} min={220} />
      </S.Section>

      <S.Section>
        <S.Heading>Contact</S.Heading>
        {/* No onViewClassic here — this *is* the classic view. */}
        <ContactCard contact={CONTACT} />
      </S.Section>
    </S.Column>
  </S.Scroll>
);

export default Classic;
