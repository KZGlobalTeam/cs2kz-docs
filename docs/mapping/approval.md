# Map Approval

If you want your own map to become part of
[the official map pool](https://cs2kz.org/maps), you need
[permission](#acquiring-permission) to do so,
[submit it for approval](#creating-a-map), and make sure it follows
[the rules](#rules). If you plan on porting a map, see

## Acquiring Permission

>[!NOTE]
> This step only has to be performed *once*; not for every map.

Visit [the forum](https://forum.cs2kz.org) and create a new post in the "Map
Approval" category with the "Approval Permission" tag. The post should include
a link to your Steam profile and a short introduction about who you are, your
connection to KZ, and whether you have any existing maps (ideally on your
workshop).

>[!NOTE]
> This post will be private between you and the map approval team.

Once you have been accepted, you can log into
[the dashboard](https://dashboard.cs2kz.org) and submit maps. Please keep in
mind that this is a **privilege** and that if you break any rules or otherwise
abuse your power, it will be taken away from you.

## Creating a Map

Once you have created a map (in Hammer), you may also create it on
[the dashboard](https://dashboard.cs2kz.org). Maps will transition between
[different states](#map-states) over time, and newly created maps start out in
the "WIP" state.

### Map States

Newly submitted maps will start out in the "WIP" state. In this state you can
gather player feedback, for example by making a forum post and/or joining
[the Mapping Discord](https://discord.gg/R593VhE). While players _can_ submit
records during this phase, leaderboards will be reset whenever the map is
updated.

>[!NOTE]
> In order to update a map you have to update it both on the workshop and the
> dashboard.

If a map remains without updates for ~2 months it will transition into the
"Graveyard" state where it will remain until you update it again.

Once you are happy with your creation you may submit it for approval. You do
this by updating its state to "Submitted" on the dashboard and then creating
another forum post in the "Map Approval" category with the "Submission" tag.

>[!NOTE]
> This post will be publicly visible, but only you and the map approval team
> will be able to comment on it.

>[!WARNING]
> Once your map is in the "Submitted" state, you will no longer be able to
> update it.

If your map is accepted it will transition into the "Approved" state where it
will remain frozen.

If your map is rejected it will transition back into the "WIP" state and you
can choose to either continue your work on it and re-submit for approval, or
leave it as is. If you decide that your map is complete, and you don't want it
to disappear into the sea of "Graveyard" maps, you can update its state on the
dashboard to "Complete". This will, just like "Approved", freeze your map from
further updates, but it will be more visible to players searching for new maps
to play.

## Rules

Rules that apply to every map:

- At least one course must be present on the map.
- At least one filter must have the goal of being ranked.
- A display of effort and quality
   - fully textured
   - good lighting and visibility
   - performance optimizations
   - reasonable file size
- A "jumpstats" area featuring LJ blocks from 210-280, in increments of 10
   - There must be a trigger that allows for teleporting to this area via
     `!lj`.
- Discriminatory, obscene, or sexually explicit content are **strictly
  prohibited**.
- Any course with filters intended to be ranked must be completed at least once
  on said filter while the map is in the WIP state.

Rules that apply to courses with ranked filters specifically:

- Avoid using clips, non-solid blocks, triggers, or moving blocks in
  unintuitive or exploitable ways.
- Avoid inconsistent mechanics like moving platforms or time-based events.
- Avoid "pre-run setups" like breakable objects or doors which do not open
  automatically.
- There must be no way to skip from the start of a course straight to the end,
  resulting in ridiculously short times.

In addition, the *names* of your maps must start with `kz_` and can only
contain ASCII alphanumeric characters (and underscores). It should be easily
distinguishable from other maps.

Course names follow the same rules except that they should **not** have the
`kz_` prefix.

## Porting

Map "porting" refers to the process of taking an existing map, for example from
CS:GO, and updating it to CS2. If you plan on porting a map and submitting it,
and you are not the original mapper, you must get permission from the original
mapper to port their map. If the original mapper has been inactive for 2 years
or longer, and you have made honest (but unsuccessful) attempts to contact
them, you may submit your port anyway.
