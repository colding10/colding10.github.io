import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'

interface FilterDropdownsProps {
  uniqueYears: number[]
  uniqueTeams: string[]
}

const FilterDropdowns = ({
  uniqueYears,
  uniqueTeams,
}: FilterDropdownsProps) => {
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedTeam, setSelectedTeam] = useState('')
  const [selectedTier, setSelectedTier] = useState('')

  useEffect(() => {
    const handleClearFilters = () => {
      setSelectedYear('')
      setSelectedTeam('')
      setSelectedTier('')
    }

    document.addEventListener('clearFilters', handleClearFilters)
    return () => {
      document.removeEventListener('clearFilters', handleClearFilters)
    }
  }, [])

  const handleYearChange = (year: string) => {
    setSelectedYear(year)
    document.dispatchEvent(
      new CustomEvent('yearFilterChange', { detail: { value: year } }),
    )
  }

  const handleTeamChange = (team: string) => {
    setSelectedTeam(team)
    document.dispatchEvent(
      new CustomEvent('teamFilterChange', { detail: { value: team } }),
    )
  }

  const handleTierChange = (tier: string) => {
    setSelectedTier(tier)
    document.dispatchEvent(
      new CustomEvent('tierFilterChange', { detail: { value: tier } }),
    )
  }

  return (
    <>
      {/* Custom Year Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="min-w-[120px] justify-between">
            <span>{selectedYear || 'All Years'}</span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="z-50 w-[120px]">
          <DropdownMenuItem
            onClick={() => handleYearChange('')}
            className={
              selectedYear === ''
                ? 'bg-accent text-accent-foreground'
                : 'bg-background text-foreground'
            }
          >
            All Years
          </DropdownMenuItem>
          {uniqueYears.map((year) => (
            <DropdownMenuItem
              key={year}
              onClick={() => handleYearChange(year.toString())}
              className={
                selectedYear === year.toString()
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-background text-foreground'
              }
            >
              {year}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Placement/Tier Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="min-w-[140px] justify-between">
            <span>{selectedTier || 'All Placements'}</span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="z-50 w-[160px]">
          <DropdownMenuItem
            onClick={() => handleTierChange('')}
            className={
              selectedTier === ''
                ? 'bg-accent text-accent-foreground'
                : 'bg-background text-foreground'
            }
          >
            All Placements
          </DropdownMenuItem>
          {['SS', 'S', 'A', 'B', 'C', 'D'].map((tier) => (
            <DropdownMenuItem
              key={tier}
              onClick={() => handleTierChange(tier)}
              className={
                selectedTier === tier
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-background text-foreground'
              }
            >
              {tier}
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem
            onClick={() => handleTierChange('TOP10')}
            className={
              selectedTier === 'TOP10'
                ? 'bg-accent text-accent-foreground'
                : 'bg-background text-foreground'
            }
          >
            Top 10
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleTierChange('TOP5')}
            className={
              selectedTier === 'TOP5'
                ? 'bg-accent text-accent-foreground'
                : 'bg-background text-foreground'
            }
          >
            Top 5
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleTierChange('TOP3')}
            className={
              selectedTier === 'TOP3'
                ? 'bg-accent text-accent-foreground'
                : 'bg-background text-foreground'
            }
          >
            Top 3
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Custom Team Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="min-w-[120px] justify-between">
            <span>{selectedTeam || 'All Teams'}</span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="z-50 w-[120px]">
          <DropdownMenuItem
            onClick={() => handleTeamChange('')}
            className={
              selectedTeam === ''
                ? 'bg-accent text-accent-foreground'
                : 'bg-background text-foreground'
            }
          >
            All Teams
          </DropdownMenuItem>
          {uniqueTeams.map((team) => (
            <DropdownMenuItem
              key={team}
              onClick={() => handleTeamChange(team)}
              className={
                selectedTeam === team
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-background text-foreground'
              }
            >
              {team}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default FilterDropdowns
