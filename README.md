# Zenterio Jira Dashboard

Jira is missing a good *dashboard* view for monitoring and information display
on permanent screen/TV installations. The standard dashboard has a lot of
unnecessary information such as the dashboard side-panel, menus, headers and
footers.

The built-in wallboard is slow, hard to use and customize.

This solution is based on using JavaScript (jquery) to manipulate the layout of
a standard dashboard, to strip-away menus, header, footer and dashboard side-panel.

It has been implemented for **Atlassian Jira 7.3.1** and might require some
tweaking for other versions.

## License

MIT, see LICENSE.md.

## Installation

The simplest way to integrate custom JavaScript in jira is to place it in the
*announcement banner*. It can also be added in page headers and footers, but
it usually require more work and doesn't survive jira-upgrades. Consult the
Atlassian jira manual for how to integrate custom JavaScript that best suites
your needs.

### Announcement Banner

In the announcement banner, place a script-tag, either with the content of
zenterio.dashboard.js, or a reference to it. If referencing it using the
`src` attribute, it is important that it is served from the same domain as your
jira server, to allow proper DOM manipulation in all browsers.

inline script:

    <script type="text/javascript">
    // content of zenterio.dashboard.js
    </script>

sourced script:

    <script type="text/javascript" src="zenterio.dashboard.js"></script>

## Activation

To activate the dashboard mode, add the following to the search-query section
of the URL.

    ?zenterioDashboardMode=true
