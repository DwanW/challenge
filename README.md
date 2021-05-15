# Solution to Triangulating Polygons

## Challenge:

“Can you color the inside dots so as to create two complete triangles and no more?”, using the as-drawn triangulation.

![](/challenge.jpg)

# Description of the Solution:

This solution uses a simplified loop to check 3 colored dots rather than 11 dots. The reason that coloring 11 dots can be reduced to only 3 dots is due to some patterns I've found while attempting to solve it by hands.

To analyze what this question is asking, I found it is easier to think in this particular manner. Rather than trying to find a triangle with three colored dots(red,blue,yellow), I think of them as 3 sides: so a complete triangle is the one that has three different sides: red-blue, red-yellow, blue-yellow. Notice we are not looking for sides that has two of the same color(eg.blue-blue).

How to get complete triangles:
when three sides are present in a triangle: red-blue, red-yellow, blue-yellow. While filling color, what we are essentially creating is either mono-colored sides(eg.red-red) or mixed-colored sides(color1-color2), by always coloring in a way that can create new mixed-colored sides will result in complete triangle.

How to not get complete triangles:
Because we are limiting the number of complete triangles, there are some restrictions when filling the colors while the connected dots are colored.(eg. if the connecting dots are blue and red, then yellow must be avoided to not get a complete triangle). Also sometimes it is unavoidable to get a complete triangle. for example, when the dot is connected to three different sides (red-blue, red-yellow, blue-yellow), then no matter which color you fill will result in a complete triangle.

This reminds me of doing sudoku where you start from places with the most restriction and then it will in turn provide restriction for other parts of the grid. So in this case, it make sense to start from the outside and work our way inside the polygon. In order to avoid getting complete triangle while coloring, one trick is to make sure we have _consistent sides_ that face in ward. Suppose you start from top right corner:

![](/step1.jpg)

notice the yellow-blue and blue-red sides are essentially transported inward while we created a mono colored side(blue-blue), mono colored side do not affect how we evaluate complete triangles, since complete triangles do not have mono colored side. Same goes with the top left corner, we have blue-red and red-red, to make the sides consistent, we filled it with red, and we created red-red and blue-red and red-red.

and continuing this way we get

![](/step1-3.jpg)

now since we have maintained the initial 11 sides constant by creating multiple mono colored sides. we now have a smaller polygon to work with. We cannot repeat the step we followed thus far, because now the lines converge to 3 dots in the center.(a, b, c). By filling each of these dot, we create multiple sides that connect to other dots as well.

![](/step2.jpg)

at this point I decided to search all possibilities since we only have 3 variables a,b,c. and in each scenario (15 triangles), we can count the number of complete triangles and determined the minimum from there.

# The resources I used

I have looked up graph coloring and polygon triangulation since it was the first thing that came to my mind, however I did not use any of them to complete this challenge.

# How long it took

It took me approximately 4 hours.

# What I would Improve if I had to start over again.

I would try to analyze more critically what the question is asking, also there are some hypothesis and patterns which may improve the solutions, and I would like to dive deep into those possible patterns to make my solution better.

# Installation && Execution

The environment for this code is node 12+

To run the code, in the terminal, run the following command(this run with default)

```
node solution.js
```

To add a custom argument, run the following command

```
node solution.js [ARG]
```

Input constrain:

- input must be made of 'r', 'b', or 'y'. which stands for 'red' 'blue' 'yellow'
- The input sequence must be in the same order as what was labeled above, eg default is "brrybrybrry"
- input length must be 11 (11 colored corners)

this will provide custom color for the dot in the above marked sequence.

```
node solution.js brrybrybrry
```

The output

```
{minimum: number}
boolean
```

The first line displays the minimum number of complete triangles that can be found.

The second line answer to the initial question: “Can you color the inside dots so as to create two complete triangles and no more?”

false means no you can't.
and true means you can.👍
