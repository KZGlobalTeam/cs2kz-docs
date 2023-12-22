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
> These are best-effort descriptions, not hard rules. They are meant to get a
> point across, not to be taken literally.

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

Each map can have one or more "courses". Simply put: a course is a section of
gameplay with a start and end zone. However, unlike in GOKZ, there will be no
concept of "main" and "bonus" courses anymore; just courses.

In order to get your map approved you must uphold a minimum quality standard
(which has not been defined yet), but because we want to allow mappers to be
creative, while keeping competition reasonable, we are introducing the concept
of "ranked" [filters](#filters). This means that mappers can have high quality,
high effort courses that would have been "main" courses in GOKZ, which players
compete on, but also silly courses, which previously were called "bonuses". In
order for a filter to be ranked, it must be tier 8 or lower, and "reasonable to
compete on" (a subjective rating that has not been defined yet).

## Filters

A filter is a combination of a course, a mode, and whether teleports are
used. Each course will have 4 filters applied to it:

1. VNL with teleports
2. VNL without teleports
3. CKZ with teleports
4. CKZ without teleports

Each filter will have its own [tier](#tiers) and its own "ranked" status. As
mentioned in [Courses](#courses), ranked filters have higher requirements than
unranked ones, but can be part of the same map. **Every** record, nomatter the
filter, will be stored and displayed on a leaderboard on the official
website. However, only **ranked** records will award points. This is to keep
competition reasonable while allowing mappers creative freedom.

An example filter looks like this:

- kz_creative_name, course 3
- CKZ
- no teleports
- tier 4
- ranked

Filters can, and will, change over time as the skill ceiling of KZ increases,
and boundaries get broken. We will try to figure out a system that lets the
community have a word in changing things when desired, and **no data will be lost**.
So go and play what you enjoy!

## Map approval process

Some details on this have not been decided yet, but it will be similar to GOKZ.

- There will be a selected group of people invested into the KZ community that
  have enough experience to make informed decisions about the difficulty and
  rankability of courses in all the mode combinations.
- There will be an objective minimum quality standard any global KZ map has to
  fulfill.
- Whether something is rankable depends partially on objective measurements, but
  will also be subjective to a certain degree ("reasonable to compete on").
- Every global KZ map has to have **at least one** course with a filter of tier
  8 or lower attached to it.
- Every global KZ map must be uploaded to the [CS2 Steam Workshop](https://steamcommunity.com/app/730/workshop).
