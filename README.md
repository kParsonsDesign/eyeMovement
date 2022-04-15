# Tracking Eye Movement Exercise
> Exercise started in week 8 of MIT Full Stack Developer Professional Certificate Program

## Description 
The original goal of this project was to create eye-like images from multiple divs and have the iris/pupil of the "eye" follow the mouse movement on screen.

### Refactoring
I modified this project heavily from the original goals.

<ol>
  <li>Created 2 svg images for the left eye using Adobe Illustrator
    <ol>
      <li>The eye outline (the black lines with a gray background)</li>
      <li>The green iris with black pupil</li>
      <li>The white of the eye is achieved by a white background color on the div containing the pupil</li>
    </ol>
  </li>
  <li>The images for the right eye are created by using css to flip them in the x-direction</li>
  <li>Added touch handling for mobile devices via javascript touch event</li>
  <li>Added limited image resizing for mobile via css media query</li>
  <li>Included a meta tag to stop the pinterest onhover popup from appearing, since use of this page involves waving the mouse over the eye images repeatedly</li>
</ol>

## How to Run
See these crazy eyes on any web browser at [kParsonsDesign.github.io/eyemovement/](https://kParsonsDesign.github.io/eyemovement/).

## Roadmap
I may try to make each eye move somewhat independently from the other. I would like to try to get a "cross-eyed" effect, but initial results just looked odd. I would need to try to track the mouse movement from an angle related to each eye, as using the position related to screen width does not create the correct effect.

## License
Copyright &copy; Katherine Parsons 2022

[Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://github.com/kParsonsDesign/eyemovement/blob/main/LICENSE)

This is a human-readable summary of (and not a substitute for) the license:

### You are free to:

**Share** -- copy and redistribute the material in any medium or format

**Adapt** -- remix, transform, and build upon the material

### Under the following terms:

**Attribution** -- You must give *appropriate credit*, provide a link to the license, and *indicate if changes were made*. You may do so in any reasonable manner, but not in any way that suggests the lecensor endorses you or your use.

**NonCommercial** -- You may not use the material for *commercial purposes*.

**ShareAlike** -- If you remix, transform, or build upon the material, you must distribute your contributions under the *same license* as the original.

**No additional restrictions** -- You may not apply legal terms or *technological measures* that legally restrict others from doing anything the license permits.

### Notices:

You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable *exception or limitation*.

No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as *publicity, privacy, or moral rights* may limit how you use the material.
