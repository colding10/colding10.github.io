export const MONTHS: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

// Helpers to derive placement rank and tier
export function parsePlacementNumber(placement: string | undefined): number | null {
    if (!placement) return null
    const match = placement.match(/\d+/)
    if (!match) return null
    const n = Number(match[0])
    return Number.isFinite(n) ? n : null
  }
  
  export function getTierFromRank(rank: number | null): 'SS' | 'S' | 'A' | 'B' | 'C' | 'D' | 'F' {
    if (rank == null) return 'F'
    if (rank <= 3) return 'SS'
    if (rank <= 5) return 'S'
    if (rank <= 10) return 'A'
    if (rank <= 25) return 'B'
    if (rank <= 50) return 'C'
    if (rank <= 100) return 'D'
    return 'F'
  }

  export function getTierBadgeClasses(tier: ReturnType<typeof getTierFromRank>): string {
    switch (tier) {
      case 'SS':
        return 'bg-rose-100 text-rose-800 border border-rose-300/60 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-800'
      case 'S':
        return 'bg-orange-100 text-orange-800 border border-orange-300/60 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800'
      case 'A':
        return 'bg-amber-100 text-amber-900 border border-amber-300/60 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800'
      case 'B':
        return 'bg-sky-100 text-sky-800 border border-sky-300/60 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800'
      case 'C':
        return 'bg-blue-100 text-blue-800 border border-blue-300/60 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800'
      case 'D':
        return 'bg-indigo-100 text-indigo-800 border border-indigo-300/60 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800'
      case 'F':
        return 'bg-zinc-100 text-zinc-800 border border-zinc-300/60 dark:bg-zinc-900/30 dark:text-zinc-300 dark:border-zinc-800'
      default:
        return 'bg-muted text-muted-foreground border border-border'
    }
  }