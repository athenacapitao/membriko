import type { ApplicationData } from './types'

// Roofing applications
import { flatRoofs } from './roofing/flat-roofs'
import { pitchedRoofs } from './roofing/pitched-roofs'
import { greenRoofs } from './roofing/green-roofs'
import { curvedRoofs } from './roofing/curved-roofs'
import { coolReflectiveRoofs } from './roofing/cool-reflective-roofs'
import { terracesBalconies } from './roofing/terraces-balconies'
import { solarIntegration } from './roofing/solar-integration'
import { gutterLining } from './roofing/gutter-lining'
import { shedGarageRoofing } from './roofing/shed-garage-roofing'
import { roofRenovation } from './roofing/roof-renovation'

// Water applications
import { swimmingPools } from './water/swimming-pools'
import { pondsWaterGardens } from './water/ponds-water-gardens'
import { decorativeLakes } from './water/decorative-lakes'
import { waterReservoirs } from './water/water-reservoirs'
import { aquaculture } from './water/aquaculture'
import { irrigationCanals } from './water/irrigation-canals'
import { fountainsWaterFeatures } from './water/fountains-water-features'
import { rainwaterHarvesting } from './water/rainwater-harvesting'
import { stormwaterManagement } from './water/stormwater-management'
import { potableWater } from './water/potable-water'

// Civil applications
import { foundations } from './civil/foundations'
import { basements } from './civil/basements'
import { retainingWalls } from './civil/retaining-walls'
import { undergroundParking } from './civil/underground-parking'
import { tunnels } from './civil/tunnels'
import { bridges } from './civil/bridges'
import { expansionJoints } from './civil/expansion-joints'
import { plazaPodium } from './civil/plaza-podium'

// Envelope applications
import { facades } from './envelope/facades'
import { balconies } from './envelope/balconies'
import { wetRooms } from './envelope/wet-rooms'
import { flashingDetails } from './envelope/flashing-details'
import { planterBoxes } from './envelope/planter-boxes'

// Buildings applications
import { industrial } from './buildings/industrial'
import { commercial } from './buildings/commercial'
import { residential } from './buildings/residential'

// Agricultural applications
import { farmReservoirs } from './agricultural/farm-reservoirs'
import { silageStorage } from './agricultural/silage-storage'
import { slurryLagoons } from './agricultural/slurry-lagoons'
import { greenhouses } from './agricultural/greenhouses'

// Environmental applications
import { wastewaterTreatment } from './environmental/wastewater-treatment'
import { biogasDigesters } from './environmental/biogas-digesters'
import { chemicalContainment } from './environmental/chemical-containment'
import { landfillCapping } from './environmental/landfill-capping'

// Recreation applications
import { playgroundSurfaces } from './recreation/playground-surfaces'
import { sportsSurfaces } from './recreation/sports-surfaces'

// Registry of all application content.
const applicationRegistry: ApplicationData[] = [
  // Roofing (10)
  flatRoofs,
  pitchedRoofs,
  greenRoofs,
  curvedRoofs,
  coolReflectiveRoofs,
  terracesBalconies,
  solarIntegration,
  gutterLining,
  shedGarageRoofing,
  roofRenovation,

  // Water (10)
  swimmingPools,
  pondsWaterGardens,
  decorativeLakes,
  waterReservoirs,
  aquaculture,
  irrigationCanals,
  fountainsWaterFeatures,
  rainwaterHarvesting,
  stormwaterManagement,
  potableWater,

  // Civil (8)
  foundations,
  basements,
  retainingWalls,
  undergroundParking,
  tunnels,
  bridges,
  expansionJoints,
  plazaPodium,

  // Envelope (5)
  facades,
  balconies,
  wetRooms,
  flashingDetails,
  planterBoxes,

  // Buildings (3)
  industrial,
  commercial,
  residential,

  // Agricultural (4)
  farmReservoirs,
  silageStorage,
  slurryLagoons,
  greenhouses,

  // Environmental (4)
  wastewaterTreatment,
  biogasDigesters,
  chemicalContainment,
  landfillCapping,

  // Recreation (2)
  playgroundSurfaces,
  sportsSurfaces,
]

export function getApplicationById(id: string): ApplicationData | undefined {
  return applicationRegistry.find((app) => app.id === id)
}

export function getApplicationsByCategory(categoryId: string): ApplicationData[] {
  return applicationRegistry.filter((app) => app.categoryId === categoryId)
}

export const allApplications: ApplicationData[] = applicationRegistry
