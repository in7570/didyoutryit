---
name: component-placement
description: Use whenever adding a new UI component, control, or section to this app (DiDYOUTRYiT?) — decides where in the layout it should physically go.
---

# Component placement

When adding any new UI component or control, place it at the position that is
logically appropriate from the end user's perspective — not wherever is
structurally convenient to write in the code.

Concretely: a component should sit next to, or clearly attached to, the
content it actually relates to. Don't float it near some other element just
because that element renders earlier in the page or is easier to reach in the
component tree.

## Precedent from this project

A "show translation" toggle for a prompt's template text was first placed
right under the page title (`<h1>`), above the model picker — before the user
has even picked a model. That was wrong: the actual prompt text only appears
inside the flow-box's `.preview-box`, once a model is selected. The user
pointed out the toggle has to live next to the real prompt content (the
preview box), not near the title, because that's where a person would
actually look for it.

Fix applied: the toggle (and its expanded translation box) was moved to sit
directly above `.preview-box` inside each flow-box (`flow-deeplink` and
`flow-copy`), duplicated across both branches rather than hoisted to one
shared-but-logically-disconnected spot near the title.

## Rule of thumb

Before adding a new component, ask: "where would someone naturally look for
this, given what it does?" Place it there — even if that means duplicating
the JSX across two similar branches, rather than hoisting it to a
shared-but-illogical location purely for code convenience.
