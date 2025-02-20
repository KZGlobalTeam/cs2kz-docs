# Ranking

You can compare yourself to other players on two scales: per leaderboard and
overall

Within each leaderboard every record is awarded an amount of [points](#points).
All points you gain from all ranked leaderboards will culminate in your [player
rating](#rating).

## Points

Every record on a ranked filter is awarded a value between `0` and `10,000`.
The fastest record will always be worth `10,000` points. Depending on the tier
of the filter, every record will also have a minimum amount of points.

| Tier | Minimum Points (NUB) | Minimum Points (PRO) |
|------|----------------------|----------------------|
|    1 |                    0 |                1,000 |
|    2 |                  500 |                1,450 |
|    3 |                2,000 |                2,800 |
|    4 |                3,500 |                4,150 |
|    5 |                5,000 |                5,500 |
|    6 |                6,500 |                6,850 |
|    7 |                8,000 |                8,200 |
|    8 |                9,500 |                9,550 |

The final value depends on how well you do compared to everyone else.

## Rating

All points you achieve on ranked filters are sorted and summed up with
a modifier applied to each value.

The following python code illustrates the algorithm:

```python
# `records` are sorted by points in descending order
def calculate_rating(records):
    rating = 0
    for n, record in enumerate(records):
        rating += record["points"] * (0.975 ** n)
    return rating
```
