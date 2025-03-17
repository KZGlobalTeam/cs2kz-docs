# Mapping

A KZ "map" refers to a CS2 map that contains one or more ["courses"](#courses).
Every map is uploaded to the
[Steam Workshop](https://steamcommunity.com/app/730/workshop) and registered to
the [GlobalAPI](/api/explorer#tag/maps). You can find the official map list on
[our website](https://cs2kz.org/maps).

## Courses

A "course" is a section of the map that has a start and end zone. For each
course there are two ["filters"](#course-filters) that determine its
difficulty.

### Course Filters

A "course filter" is a set of attributes that are applied to courses on
a per-mode basis. More specifically:

- a [Tier](#tiers)
- whether it is ranked
   - "unranked" means the filter is not ranked and never will be (e.g. because
     the mapper requested so).
   - "pending" means the filter is not currently ranked, for example because it
     was determined too difficult for the given mode. It may however *become*
     ranked later if a player manages to beat it.
   - "ranked" means the filter is ranked and will award points for competing.

### Tiers

We judge the difficulty of a course in a given mode by placing it into one of
ten different **tiers**:

1. "Very Easy" - an average CS2 player who has never touched KZ before is able
   to complete the course
2. "Easy" - a new KZ player who has just learned movement basics like air
   strafing and bunny hopping is able to complete the course
3. "Medium" - more difficult than T2 but without introducing new concepts
4. "Advanced" - more advanced concepts like surf and ladders but still on
   a basic level
5. "Hard" - even more advanced concepts and more niche mechanics like box-tech,
   tightly timed sections, wall strafing, prekeep, etc.
6. "Very Hard" - more difficult than T5 but without introducing new concepts
7. "Extreme" - features the most advanced mechanics
8. "Death" - T7 but harder
9. "Unfeasible" - special tier for courses that are *technically* possible, but
   unlikely to be done by humans without TAS (Tool-Assisted Speedrun) tools
10. "Impossible" - special tier for courses that are *literally* impossible;
    even with perfect inputs (generally reserved for VNL filters on courses
    intended for CKZ)
