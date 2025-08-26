export const TEAM_URLS: Record<string, string> = {
  'BCA': 'https://ctftime.org/team/283028',
  'SPL': 'https://ctftime.org/team/222966',
  'CBF': 'https://ctftime.org/team/372043',
  'Cosmic Squid': 'https://ctftime.org/team/396585',
  '[:]': 'https://ctftime.org/team/375355',
}

export function getTeamUrl(teamName: string): string | null {
  return TEAM_URLS[teamName] || null
}

export function isTeamClickable(teamName: string): boolean {
  return teamName in TEAM_URLS
}
