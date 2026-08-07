// The six "generative UI" components the agent renders inline. The classic
// résumé view lays out the very same components statically, so a fix here shows
// up in both places.

import Image from 'next/image';
import {
  IconArrowUpRight,
  IconDownload,
  IconFileText,
  IconGithub,
  IconImage,
  IconLinkedin,
  IconMail,
  IconMapPin,
  IconTrophy,
  IconUser,
  SkillGlyph,
} from '../icons';
import type {
  AboutData,
  AchievementItem,
  ContactInfo,
  ExperienceItem,
  ProjectItem,
  SkillGroupItem,
} from '../types';
import * as S from './styles';

interface AboutCardProps {
  data: AboutData;
  /** Public path to the portrait; falls back to a Lucide glyph when absent. */
  photo?: string | null;
}

export const AboutCard = ({ data, photo = null }: AboutCardProps) => (
  <S.AboutShell>
    <S.AboutPhoto>
      {photo ? (
        <Image src={photo} alt={data.name} width={92} height={92} />
      ) : (
        <IconUser size={34} />
      )}
    </S.AboutPhoto>
    <S.AboutBody>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <S.AboutName>{data.name}</S.AboutName>
        <S.AboutRole>{data.role}</S.AboutRole>
      </div>
      <S.AboutBio>{data.bio}</S.AboutBio>
      <S.TagRow>
        {data.tags.map(tag => (
          <S.Tag key={tag}>{tag}</S.Tag>
        ))}
      </S.TagRow>
      <S.AboutLocation>
        <IconMapPin />
        <span>{data.location}</span>
      </S.AboutLocation>
    </S.AboutBody>
  </S.AboutShell>
);

export const ExperienceTimeline = ({ items }: { items: ExperienceItem[] }) => (
  <S.TimelineShell>
    {items.map(job => (
      <S.TimelineRow key={`${job.company}-${job.period}`}>
        <S.TimelineRail>
          <S.TimelineDot />
          <S.TimelineLine />
        </S.TimelineRail>
        <S.TimelineBody>
          <S.TimelineHead>
            <S.TimelineRole>{job.role}</S.TimelineRole>
            <S.TimelineCompany>{job.company}</S.TimelineCompany>
          </S.TimelineHead>
          <S.TimelinePeriod>{job.period}</S.TimelinePeriod>
          <S.TimelineSummary>{job.summary}</S.TimelineSummary>
          <S.TagRow>
            {job.tags.map(tag => (
              <S.TimelineTag key={tag}>{tag}</S.TimelineTag>
            ))}
          </S.TagRow>
        </S.TimelineBody>
      </S.TimelineRow>
    ))}
  </S.TimelineShell>
);

export const ProjectCard = ({ item }: { item: ProjectItem }) => (
  <S.ProjectShell>
    <S.ProjectThumb>
      <IconImage />
      <S.ProjectBadge>{item.badge}</S.ProjectBadge>
    </S.ProjectThumb>
    <S.ProjectBody>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <S.ProjectTitle>{item.title}</S.ProjectTitle>
        <S.ProjectDesc>{item.description}</S.ProjectDesc>
      </div>
      <S.TagRow>
        {item.tags.map(tag => (
          <S.ProjectTag key={tag}>{tag}</S.ProjectTag>
        ))}
      </S.TagRow>
      <S.ProjectLinkRow>
        {item.links.map(link => (link.external ? (
          <S.ProjectLinkExternal
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            <span>{link.label}</span>
            <IconArrowUpRight />
          </S.ProjectLinkExternal>
        ) : (
          <S.ProjectLinkInternal key={link.url} href={link.url}>
            <span>{link.label}</span>
            <IconArrowUpRight />
          </S.ProjectLinkInternal>
        )))}
      </S.ProjectLinkRow>
    </S.ProjectBody>
  </S.ProjectShell>
);

export const ProjectCardGrid = ({ items, min = 230 }: { items: ProjectItem[]; min?: number }) => (
  <S.ProjectGrid $min={min}>
    {items.map(item => (
      <ProjectCard key={item.title} item={item} />
    ))}
  </S.ProjectGrid>
);

export const SkillsGrid = ({ groups }: { groups: SkillGroupItem[] }) => (
  <S.SkillsShell>
    {groups.map(group => (
      <S.SkillCard key={group.domain}>
        <S.SkillHead>
          <SkillGlyph icon={group.icon} />
          <S.SkillDomain>{group.domain}</S.SkillDomain>
          {group.growing ? <S.SkillGrowing>growing</S.SkillGrowing> : null}
        </S.SkillHead>
        <S.TagRow>
          {group.skills.map(skill => (
            <S.SkillChip key={skill}>{skill}</S.SkillChip>
          ))}
        </S.TagRow>
      </S.SkillCard>
    ))}
  </S.SkillsShell>
);

export const AchievementCard = ({ item }: { item: AchievementItem }) => (
  <S.AchievementShell>
    <S.AchievementHead>
      <IconTrophy />
      {item.metric ? <S.AchievementMetric>{item.metric}</S.AchievementMetric> : null}
    </S.AchievementHead>
    <S.AchievementTitle>{item.title}</S.AchievementTitle>
    <S.AchievementDetail>{item.detail}</S.AchievementDetail>
  </S.AchievementShell>
);

export const AchievementCardGrid = ({
  items,
  min = 210,
}: { items: AchievementItem[]; min?: number }) => (
  <S.AchievementGrid $min={min}>
    {items.map(item => (
      <AchievementCard key={item.title} item={item} />
    ))}
  </S.AchievementGrid>
);

interface ContactCardProps {
  contact: ContactInfo;
  /**
   * Fallback for when no résumé PDF is published: the button opens the classic
   * view, which is the same content laid out as a single scrollable page. Omit
   * it where that would be a no-op (the classic view itself) and no button
   * renders at all.
   */
  onViewClassic?: (() => void) | null;
}

export const ContactCard = ({ contact, onViewClassic = null }: ContactCardProps) => (
  <S.ContactShell>
    <S.ContactRow href={`mailto:${contact.email}`}>
      <S.ContactGlyph><IconMail /></S.ContactGlyph>
      <S.ContactText>
        <S.ContactLabel>Email</S.ContactLabel>
        <S.ContactValue>{contact.email}</S.ContactValue>
      </S.ContactText>
    </S.ContactRow>
    <S.ContactRow href={contact.linkedin} target="_blank" rel="noreferrer">
      <S.ContactGlyph><IconLinkedin /></S.ContactGlyph>
      <S.ContactText>
        <S.ContactLabel>LinkedIn</S.ContactLabel>
        <S.ContactValue>{contact.linkedinLabel}</S.ContactValue>
      </S.ContactText>
    </S.ContactRow>
    <S.ContactRow href={contact.github} target="_blank" rel="noreferrer">
      <S.ContactGlyph><IconGithub /></S.ContactGlyph>
      <S.ContactText>
        <S.ContactLabel>GitHub</S.ContactLabel>
        <S.ContactValue>{contact.githubLabel}</S.ContactValue>
      </S.ContactText>
    </S.ContactRow>
    {contact.resumeUrl ? (
      <S.ContactAction as="a" href={contact.resumeUrl} download>
        <IconDownload size={16} strokeWidth={1.7} />
        <span>Download résumé (PDF)</span>
      </S.ContactAction>
    ) : null}
    {!contact.resumeUrl && onViewClassic ? (
      <S.ContactAction type="button" onClick={onViewClassic}>
        <IconFileText size={16} strokeWidth={1.7} />
        <span>View the full résumé</span>
      </S.ContactAction>
    ) : null}
  </S.ContactShell>
);
