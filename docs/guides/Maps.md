# Maps

Maps and everything surrounding them will be quite different in CS2KZ compared
to GOKZ. The most important changes include:

- Instead of the original 7 difficulty tiers we now have 10.
- Instead of a "main" course and 0 or more "bonus" courses we will just have
  "courses".
- Each course will have 4 "filters" applied to it. Each filter consists of a
  [mode](./Modes.md), whether teleports are allowed, a tier, and a "ranked" status.
- Every submitted record will be stored, independent of filters, but only
  records that correspond to a "ranked" filter will contribute to a player's
  overall rank.

## Tiers

The new tiering system consists of 10 different tiers:

> [!NOTE]
> These are best-effort descriptions, not hard rules. They are meant to illustrate the key ideas,
> not to be interpreted literally.

1. Very Easy - for the average player who has never touched KZ before
2. Easy - you grasp the basics of CS2 movement, like airstrafing and bhopping
3. Medium - you have some KZ experience and are comfortable with the basics
4. Advanced - you are comfortable with strafing, bhopping, surfing, and ladder
   movement
5. Hard - you have played quite a bit of KZ now and are comfortable combining
   the above techniques
6. Very Hard - tier 5 but harder
7. Extreme - you can KZ in your sleep and are competing for World Records
8. Death - you have mastered KZ and can complete the most difficult of maps
9. Unfeasible - technically possible, but probably not by humans; reserved for
   TAS runs
10. Impossible - literally and technically impossible, even with perfect inputs

Unlike in GOKZ, tiers will not be applied to maps anymore, but rather to
[Filters](#filters).

## Courses

Each map in CS2KZ consists of one or more "courses." A course is a segment of gameplay
 defined by a start and an end zone. Unlike GOKZ, CS2KZ eliminates the distinction between
  "main" and "bonus" courses—there are simply courses.

To have a [map approved](./MapApproval.md), mappers must meet a minimum quality standard 
(not yet defined). To balance creativity with fair competition, CS2KZ introduces the concept
 of "ranked" filters. This allows for diverse course types:

- High-quality, high-effort courses (formerly "main" courses in GOKZ) designed for competitive play.
- Fun or experimental courses (previously "bonus" courses) that offer more creative gameplay.

For a filter to be ranked, it must:

- Be a tier of 8 or lower.
- Be "reasonable to compete on" (a subjective standard to be further clarified later in development).

## Filters

In CS2KZ, each course has a filter which represents a unique combination of mode,
 teleport settings, difficulty tier, and "ranked" status. Filters create different 
 variations of a course, providing players with distinct challenges and aligning the 
 course with the appropriate difficulty level.

### Key Components of a Filter

1. **Mode** - This defines how the course is played (either [CKZ](./Modes.md#Classic) or [VNL](./Modes.md#Vanilla))
2. **Teleport Settings** - Whether or not teleports are allowed in the course
3. **Tier** - Each Filter will have a [tier](#tiers), which indicates the difficulty level of the filter, determined
 by the course’s complexity and challenge. Filters can range from Tier 1 (Very East) to Tier 10 (Impossible). 
4. **Ranked Status** - This indicates whether the filter is ranked or unranked.

#### Example Filter

- **Map:** kz_example_map, course 3  
- **Mode:** CKZ  
- **Teleport Setting:** No teleports  
- **Tier:** 4  
- **Ranked Status:** Ranked  


Filters will evolve over time as the skill ceiling of KZ grows and new boundaries are reached. We aim to create a system
 that allows the community to have input in making changes when needed, while ensuring **no data is lost.**
So go and play what you enjoy!

> [!NOTE]  
> Only records from ranked filters will contribute to a player's overall rank and award points. This ensures a 
> fair competitive environment while giving mappers the freedom to create diverse courses.



