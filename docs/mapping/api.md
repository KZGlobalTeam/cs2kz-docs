# Mapping API

The Mapping API was designed with using the [Mapping API FGD][fgd] in
mind. Some features are available without the FGD, like a basic start and end
zone (only 1 course without the FGD), course start position, and jumpstat area
location.

## Features available without the FGD

### Timer Zones

The timer starts when the player leaves the start zone and ends when the player
enters the end zone. You can create these zones like so:

1. Create a [`trigger_multiple`](https://developer.valvesoftware.com/wiki/Trigger_multiple) entity.
2. Set the start zone entity's `Name` (targetname) to `timer_startzone`.
3. Set the end zone entity's `Name` (targetname) to `timer_endzone`.

It is recommended that you use triggers that are 4 units thick and on the
ground for more consistent timing.

Some things to keep in mind:

- When using the FGD this method will not work!
- You can only create this one course without the FGD.
- Start zones can be left mid-air as long as a perfect bunnyhop is not hit.

### Course Starts

Course starts mark where players will be teleported when using the `!restart`
/ `!r` commands. The priority is ordered as below:

- `!r <course name>` - teleport to the mapper defined start position of the
  course.
- `!r` will prefer your custom start position (`!ssp`), or the mapper defined
  start position of the current active course, or the mapper defined start
  position of the only course of the map (if there is only one course).

To implement course starts, the following are required:

1. Create an [`info_teleport_destination`](https://developer.valvesoftware.com/wiki/Info_teleport_destination) entity.
2. Set the entity's `Name` (targetname) to `timer_start`.
3. Set Pitch Yaw Roll (Y Z X) to the angles you wish to teleport the player
   into.

For mappers using the FGD:

You should create a course start for every course you've made. Put the
targetname of your course descriptor entity in `KZ | Course Descriptor`.

### Jumpstat Area Location

There can only be one of these in a map. This works with or without the FGD.

To implement the jumpstat area location, the following are required:

1. Create an [`info_teleport_destination`](https://developer.valvesoftware.com/wiki/Info_teleport_destination) entity.
2. Set the entity's `Name` (targetname) to `timer_jumpstat_area`.
3. Set Pitch Yaw Roll (Y Z X) to the angles you wish to teleport the player
   into.

## Features available only with the FGD

For the following features you will need the
[Mapping API FGD (`csgo_internal.fgd`) file][fgd].

After opening the above link for the `.fgd`, right click on the page and click
"Save As" and save it to somewhere safe. Make sure to change the file extension
to `.fgd` if it's `.fgd.txt` or something else, otherwise hammer won't be able
to open it.

Put `csgo_internal.fgd` in the
`/steamapps/common/Counter-Strike Global Offensive/game/csgo_core/` folder.

>[!NOTE]
> If you previously weren't using the Mapping API FGD, you will have to remake
> your course's start and end zone. See below for how to make start and end
> zone triggers with the FGD.

### Updating

When the fgd changes with a Mapping API update you'll need to repeat the steps
above. When that's done, check what the new Mapping API version is: it's in the
first line in the `kz_mapping_api.fgd` file, something like this:

```
// KZ Mapping API Version 2
```

After that you'll have to change the `KZ | Mapping API Version` parameter in
`Map Properties` on every map you've used it on to the new version!

### Course Descriptors

In CS2KZ [there is no "main" course or track on a map](/mapping#courses). A map
can have multiple equally "important" courses. A **course descriptor** defines
attributes of a course, currently only the name.

To make a course descriptor:

1. Create an `info_target_server_only` entity.
2. Enable the `KZ | Is Course Descriptor` checkbox.
3. Set the entity's `Name` (targetname) to something other entities can find
   (e.g. `binguscourse`).
4. Give the course a nice `Course Name` under the `KZ | Course Descriptor`
   tree, for example `Best Bingus Bever`. This will be shown in-game to
   players, so pick a good one! If your map has only one course you should name
   it `Main`, people will usually refer to the only course with the map's name.
5. If you're creating multiple courses, make sure the Course Numbers are
   unique.
6. Enable or disable any attributes you want.

![course_descriptor](/public/images/course-descriptor.png)

### Start and End zones

The timer will start when the player leaves the start zone and end when the
player enters the end zone (and has touched every "stage" and "checkpoint" zone
assigned to the course).

1. Create a [`trigger_multiple`](https://developer.valvesoftware.com/wiki/Trigger_multiple) entity.
2. For start zones, select `Start Zone` from the `KZ | Trigger Type` dropdown.
3. For end zones, select `End Zone` from the `KZ | Trigger Type` dropdown.
4. Expand the `KZ | Zone` tree and put the targetname of your course
   descriptor entity in `Course Descriptor` (e.g. `binguscourse`).

![zones](/public/images/zones.png)

Some things to keep in mind:

>[!WARNING]
> UNFINISHED: Timer zones can act as Course starts. Entering a **start** timer
> zone will stop the player's current timer. Entering a **start** timer zone
> will set the player's start position to the zone.

- Start zones can be left midair as long as a perfect bunnyhop is not hit.
- Multiple start timer zones should not be possible to be activated at once to
  avoid usability issues.

### Split / Checkpoint / Stage zones

#### Split zones

The player doesn't need to touch any of these zones for them to finish the map,
nor do they have to touch them in numerical order. Split zones are purely for
comparing times from run to run as the name implies.

#### Checkpoint zones

These are the same as split zones, except the player has to touch every single
checkpoint zone that's assigned to the course. The order the player has to
touch checkpoint zones doesn't matter.

#### Stage zones

These are the same as checkpoint zones, except the player has to touch every
single stage zone in order.

#### Creating the zones

1. Create a [`trigger_multiple`](https://developer.valvesoftware.com/wiki/Trigger_multiple) entity.
2. Select `Split Zone` / `Checkpoint Zone` / `Stage Zone` from the
   `KZ | Trigger Type` dropdown.
3. Expand the `KZ | Zone` tree and put the targetname of your course
   descriptor entity in `Course Descriptor` (e.g. `binguscourse`).
4. Then, if this isn't the first split / checkpoint / stage zone you're making,
   increment the `Split/Checkpoint/Stage Number` by 1.

>[!INFO]
> `Split/Stage/Checkpoint Number`s must be consecutive and start from 1! For
> example: if you have 4 stage zones and 3 checkpoint zones on your course,
> then all 4 stage zones' `Stage Number`s must be 1, 2, 3 and 4. Same with the
> 3 checkpoint zones: `Checkpoint Number` on all 3 checkpoint zones, must be 1,
> 2 and 3, not 1, 2, 4 or 1, 4, 10! The same applies to split zones.

### Teleport Triggers

1. Create a [`trigger_multiple`](https://developer.valvesoftware.com/wiki/Trigger_multiple) entity.
2. Select `General Teleport` from the `KZ | Trigger Type` dropdown.
3. Set `Destination` in the `KZ | Teleport` section to the entity you want to
   teleport the player to.
4. Optionally change `Delay`. This makes it so the player gets teleported to
   the destination only after they've been in the trigger this long.
5. Optionally change `Use Destination Angles` from the default `Yes` if you
   don't want players to get their angles changed to the destination entity's.
6. Optionally change `Reset Speed` from the default `Yes` if you want players
   to keep their speed when you get teleported.
7. Optionally change `Reorient Player`. When teleported, it rotates the
   player's velocity and yaw by the teleport destination's yaw angle. The pitch
   angle will remain unchanged. This overrides the value of 'Use Destination
   Angles'.
8. Optionally change `Relative To Trigger Origin`. Gets the offset of the
   player to this trigger, then teleports the player to the destination with
   that offset added. If `Reorient Player` is enabled, then the offset is
   rotated by the destination entity's yaw. Changing the destination yaw will
   cause visible lag when moving your mouse.

All the parameters are also well explained inside hammer.

![teleport-triggers](/public/images/teleport-triggers.png)

### Bhop triggers

These share a similar setup with teleport triggers just above, with a few extra
steps. To implement bhop triggers, the following are required:

1. Change the `KZ | Trigger Type` parameter to one of the following:
   - `Multi Bhop`
   - `Single Bhop`
   - `Sequential Bhop`
2. Change `KZ | Teleport | Delay`.

>[!WARNING]
> The teleport delay for bhops starts when you touch the ground inside the
> trigger, instead of when you touch the trigger. `0.1` is a very common
> value. The minimum delay is `0.1` for bhop triggers. Read more below.

Important information:

The reason that the minimum delay is so high is that a very small delay will
greatly increase the chances of getting a false bhop hack ban. For single
bhops, you get teleported if you bhop on the same single bhop trigger
twice. For sequential bhops, you get teleported if you bhop on any of the
sequential bhop triggers that you've already bhopped on. Single and sequential
bhops get automatically reset if you touch the ground or a ladder without
touching any single/sequential bhop triggers (touching multibhop triggers will
automatically reset as well). Single bhops also get reset when you touch a bhop
trigger that isn't a single bhop.

If you need to reset bhop triggers manually, you can use the `Single bhop
reset` trigger type.

>[!INFO]
> You will almost never need to use `Single bhop reset` because resetting
> happens automatically.

### Other triggers

#### `KZ | Trigger Type`: `Reset Checkpoints`

Resets the player's checkpoints when they enter this trigger.

>[!INFO]
> This does not work when the timer is not running.

#### `KZ | Trigger Type`: `Modifiers`

Activates multiple different modifiers for the player.

- Disable Pausing: Disables pausing while inside this trigger.
- Disable Checkpoints: Disables creating checkpoints inside this trigger.
- Disable Teleports: Disables teleporting to checkpoints inside this trigger.
- Disable Jumpstats: Disables registering jumpstats inside this trigger.
- Enable Slide: Makes every surface surfable, even floors.
- Player Gravity: Change the player's gravity while inside the trigger. Can be
  negative (TODO: check what happens if it's 0). Multiple gravity modifier
  triggers can be inside each other, the one most recently entered takes
  priority.

#### `KZ | Trigger Type`: `Anti Bhop`

Optionally change Time in the `KZ | Anti Bhop` section: a delay of `0` means
that jumping is always disabled in this trigger. The delay timer starts when
you're on the ground inside the trigger.

Disables jumping while on the ground and in the trigger.

>[!WARNING]
> This trigger can be bypassed by a jumpbug and lag. You have to make this
> trigger at least `16` units thick to prevent that.

>[!WARNING]
> It can also be bypassed by jumping into a teleport trigger and bhopping when
> you get teleported (also called "trigger hopping"). This happens if the
> teleport destination is inside an antibhop trigger and the destination is `2`
> units or less above the ground. To fix this, make sure that the teleport
> destination is `4` units or more above the ground!

![anti-bhop-trigger](/public/images/anti-bhop-trigger.png)

[fgd]: https://github.com/KZGlobalTeam/cs2kz-metamod/blob/master/mapping_api/game/csgo_core/csgo_internal.fgd
