/**
 *
 * Header
 *
 */

import React from 'react';

class NavigationBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9Ijc4cHgiIGhlaWdodD0iMTdweCIgdmlld0JveD0iMCAwIDc4IDE3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnZpbWNhci1sb2dvPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRlc2t0b3AtSEQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02ODEuMDAwMDAwLCAtNDAuMDAwMDAwKSIgZmlsbD0iIzMzMzMzMyI+CiAgICAgICAgICAgIDxnIGlkPSJ2aW1jYXItbG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjgxLjAwMDAwMCwgNDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0idmltY2FyIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyLjM4MzQyMCwgMy43MzA1NzApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJGaWxsLTMiIHBvaW50cz0iMC4yMTY1Nzg3ODUgMC4zMDUwNzc3MiAyLjMyODA4MTM4IDAuMzA1MDc3NzIgNC40MDM5MzYzIDUuNzkzMTYwNjIgNC40Mjc1NjMyNCA1Ljc5MzE2MDYyIDYuNTM5MDY1ODMgMC4zMDUwNzc3MiA4LjUxOTk5ODQ3IDAuMzA1MDc3NzIgNS4wNTYzNzE1MyA4LjcxNjI2OTQzIDMuNTczNjc3MjMgOC43MTYyNjk0MyAwLjIxNjU3ODc4NSAwLjMwNTA3NzcyIj48L3BvbHlsaW5lPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC00IiBwb2ludHM9IjEwLjkwMTU1NDQgMC4zMDUwNzc3MiAxMi43MjA4MjkgMC4zMDUwNzc3MiAxMi43MjA4MjkgOC43MTYyNjk0MyAxMC45MDE1NTQ0IDguNzE2MjY5NDMgMTAuOTAxNTU0NCAwLjMwNTA3NzcyIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iRmlsbC01IiBwb2ludHM9IjE1LjkxMjUzODkgMC4zMDUwNzc3MiAxOC42NzIzMzE2IDAuMzA1MDc3NzIgMjAuNjA2MDEwNCA1Ljc5MzE2MDYyIDIwLjYyOTYzNzMgNS43OTMxNjA2MiAyMi41NzQ5MjIzIDAuMzA1MDc3NzIgMjUuMzk3MzA1NyAwLjMwNTA3NzcyIDI1LjM5NzMwNTcgOC43MTYyNjk0MyAyMy41NDgxODY1IDguNzE2MjY5NDMgMjMuNTQ4MTg2NSAyLjI3MzU3NTEzIDIzLjQ4ODQ5NzQgMi4yNzM1NzUxMyAyMS4yODIwNzI1IDguNzE2MjY5NDMgMTkuODcwNjczNiA4LjcxNjI2OTQzIDE3Ljc0NzE1MDMgMi4yNzM1NzUxMyAxNy43NjE2NTggMi4yNzM1NzUxMyAxNy43NjE2NTggOC43MTYyNjk0MyAxNS45MTI1Mzg5IDguNzE2MjY5NDMgMTUuOTEyNTM4OSAwLjMwNTA3NzcyIj48L3BvbHlsaW5lPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzQuMDQ1NTk1OSwyLjQ3NTA2MjM4IEMzMy44NjM2MjY5LDIuMjUzNTk2OTcgMzMuNjQwMjA3MywyLjA4Mzk3MjcyIDMzLjM3NTMzNjgsMS45NjQ5NDU0MyBDMzMuMTEwNDY2MywxLjg0NjMzMjg4IDMyLjgwNDE0NTEsMS43ODY2MTE4NyAzMi40NTU5NTg1LDEuNzg2NjExODcgQzMyLjEwODE4NjUsMS43ODY2MTE4NyAzMS43ODU2OTk1LDEuODUzNzk4IDMxLjQ4OTMyNjQsMS45ODg1ODUgQzMxLjE5Mjk1MzQsMi4xMjI5NTcyNyAzMC45MzU1NDQsMi4zMTEyNDQzNCAzMC43MTgzNDIsMi41NTI2MTY3NSBDMzAuNTAwNzI1NCwyLjc5Mzk4OTE1IDMwLjMzMDc3NzIsMy4wODA1NjcwNSAzMC4yMDgwODI5LDMuNDEzMTc5ODkgQzMwLjA4NTM4ODYsMy43NDUzNzggMzAuMDI0NDU2LDQuMTA1MzYyOTYgMzAuMDI0NDU2LDQuNDkyNzIwMDYgQzMwLjAyNDQ1Niw0Ljg4ODc4NjQ3IDMwLjA4NTM4ODYsNS4yNTA4NDUwOCAzMC4yMDgwODI5LDUuNTc4ODk1OSBDMzAuMzMwNzc3Miw1LjkwNzM2MTQ0IDMwLjQ5ODY1MjgsNi4xOTE4NjU2OSAzMC43MTI1Mzg5LDYuNDMzMjM4MSBDMzAuOTI2MDEwNCw2LjY3NDYxMDUxIDMxLjE3Njc4NzYsNi44NjI0ODI4NSAzMS40NjU2OTk1LDYuOTk3MjY5ODUgQzMxLjc1NDE5NjksNy4xMzIwNTY4NCAzMi4wNjQ2NjMyLDcuMTk5MjQyOTggMzIuMzk2NjgzOSw3LjE5OTI0Mjk4IEMzMi43NzYzNzMxLDcuMTk5MjQyOTggMzMuMTEyNTM4OSw3LjExOTYxNDk3IDMzLjQwNTE4MTMsNi45NjE2MDMxMyBDMzMuNjk3NDA5Myw2LjgwMzU5MTMgMzMuOTM4NjUyOCw2LjU4MjEyNTg5IDM0LjEyODQ5NzQsNi4yOTcyMDY5MiBMMzUuNjcwODgwOCw3LjQ0ODA4MDUxIEMzNS4zMTQ4MTg3LDcuOTQ2NTg1MDQgMzQuODY0MjQ4Nyw4LjMxNDQ0OTg2IDM0LjMxODM0Miw4LjU1MTY3NDk4IEMzMy43NzI4NDk3LDguNzg5MzE0ODMgMzMuMjExMTkxNyw4LjkwNzkyNzM4IDMyLjYzNDE5NjksOC45MDc5MjczOCBDMzEuOTc3NjE2Niw4LjkwNzkyNzM4IDMxLjM3MjQzNTIsOC44MDUwNzQ1NCAzMC44MTkwNjc0LDguNTk5NzgzNTcgQzMwLjI2NTI4NSw4LjM5NDA3Nzg4IDI5Ljc4Njk0Myw4LjA5OTIwNTQgMjkuMzgzNjI2OSw3LjcxNTU4MDg2IEMyOC45ODAzMTA5LDcuMzMxMTI2ODcgMjguNjY2MTE0LDYuODY2NjMwMTQgMjguNDQwNjIxOCw2LjMyMDg0NjQ4IEMyOC4yMTU1NDQsNS43NzQ2NDgwOSAyOC4xMDI3OTc5LDUuMTY1ODI1NTkgMjguMTAyNzk3OSw0LjQ5MjcyMDA2IEMyOC4xMDI3OTc5LDMuODIwNDQzOTkgMjguMjE1NTQ0LDMuMjExMjA2NzUgMjguNDQwNjIxOCwyLjY2NTAwODM2IEMyOC42NjYxMTQsMi4xMTkyMjQ3MSAyOC45ODAzMTA5LDEuNjU0NzI3OTcgMjkuMzgzNjI2OSwxLjI3MDY4ODcxIEMyOS43ODY5NDMsMC44ODY2NDk0NDkgMzAuMjY1Mjg1LDAuNTkyMTkxNyAzMC44MTkwNjc0LDAuMzg2NDg2MDA0IEMzMS4zNzI0MzUyLDAuMTgwNzgwMzA5IDMxLjk3NzYxNjYsMC4wNzc5Mjc0NjExIDMyLjYzNDE5NjksMC4wNzc5Mjc0NjExIEMzMi44NzEyOTUzLDAuMDc3OTI3NDYxMSAzMy4xMTgzNDIsMC4wOTk5MDgxMTAxIDMzLjM3NTMzNjgsMC4xNDMwMzk5NDkgQzMzLjYzMjMzMTYsMC4xODcwMDEyNDcgMzMuODg1NTk1OSwwLjI1NTg0NjI5OSAzNC4xMzQ3MTUsMC4zNTA4MTkyOTEgQzM0LjM4MzgzNDIsMC40NDU3OTIyODMgMzQuNjIyNTkwNywwLjU3MjI4NDY5NyAzNC44NTIyMjgsMC43MzAyOTY1MzIgQzM1LjA4MTQ1MDgsMC44ODg3MjMwOTUgMzUuMjg3MDQ2NiwxLjA4MjgxNjM3IDM1LjQ2OTAxNTUsMS4zMTIxNjE2MyBMMzQuMDQ1NTk1OSwyLjQ3NTA2MjM4IiBpZD0iRmlsbC02Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00MC45MjU1OTU5LDAuMzA1MDc3NzIgTDQyLjQ1NTk1ODUsMC4zMDUwNzc3MiBMNDYuMTA5NDMwMSw4LjcxNjI2OTQzIEw0NC4wMjE1NTQ0LDguNzE2MjY5NDMgTDQzLjI5NzgyMzgsNi45MjY4MzkzOCBMNDAuMDM2MDYyMiw2LjkyNjgzOTM4IEwzOS4zMzU5NTg1LDguNzE2MjY5NDMgTDM3LjI5NTc1MTMsOC43MTYyNjk0MyBMNDAuOTI1NTk1OSwwLjMwNTA3NzcyIEw0MC45MjU1OTU5LDAuMzA1MDc3NzIgTDQwLjkyNTU5NTksMC4zMDUwNzc3MiBMNDAuOTI1NTk1OSwwLjMwNTA3NzcyIFogTTQxLjYzNzMwNTcsMi43MzYxNjU4IEw0MC42MTcyMDIxLDUuMzQ1OTA2NzQgTDQyLjY2OTQzMDEsNS4zNDU5MDY3NCBMNDEuNjM3MzA1NywyLjczNjE2NTggTDQxLjYzNzMwNTcsMi43MzYxNjU4IEw0MS42MzczMDU3LDIuNzM2MTY1OCBMNDEuNjM3MzA1NywyLjczNjE2NTggWiIgaWQ9IkZpbGwtNyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDguNDgzMzE2MSwwLjMwNTA3NzcyIEw1MS42ODQxNDUxLDAuMzA1MDc3NzIgQzUyLjExMTA4ODEsMC4zMDUwNzc3MiA1Mi41MTY0NzY3LDAuMzM5ODk2MzczIDUyLjkwMDMxMDksMC40MjI3OTc5MjcgQzUzLjI4MzczMDYsMC41MDU2OTk0ODIgNTMuNjE5NDgxOSwwLjY0MDQxNDUwOCA1My45MDg4MDgzLDAuODM0NDA0MTQ1IEM1NC4xOTY4OTEyLDEuMDI4MzkzNzggNTQuNDI2NTI4NSwxLjI4NzQ2MTE0IDU0LjU5NjQ3NjcsMS42MTU3NTEzIEM1NC43NjY4Mzk0LDEuOTQ0MDQxNDUgNTQuODUxODEzNSwyLjM1MjMzMTYxIDU0Ljg1MTgxMzUsMi44NDI2OTQzIEM1NC44NTE4MTM1LDMuNDM1ODU0OTIgNTQuNjk3NjE2NiwzLjkzOTQ4MTg3IDU0LjM4ODgwODMsNC4zNTM5ODk2NCBDNTQuMDgwNDE0NSw0Ljc2OTc0MDkzIDUzLjYyOTQzMDEsNS4wNDU4MDMxMSA1My4wMzcwOTg0LDUuMTU2NDc2NjggTDU1LjE3MjIyOCw4LjcxNjI2OTQzIEw1Mi45NTMzNjc5LDguNzE2MjY5NDMgTDUxLjE5ODM0Miw1LjM0NTkwNjc0IEw1MC4zMDI1OTA3LDUuMzQ1OTA2NzQgTDUwLjMwMjU5MDcsOC43MTYyNjk0MyBMNDguNDgzMzE2MSw4LjcxNjI2OTQzIEw0OC40ODMzMTYxLDAuMzA1MDc3NzIgTDQ4LjQ4MzMxNjEsMC4zMDUwNzc3MiBMNDguNDgzMzE2MSwwLjMwNTA3NzcyIEw0OC40ODMzMTYxLDAuMzA1MDc3NzIgWiBNNTAuMzAyNTkwNywzLjc5NDgxODY1IEw1MS4zNzU3NTEzLDMuNzk0ODE4NjUgQzUxLjU0MjM4MzQsMy43OTQ4MTg2NSA1MS43MTgxMzQ3LDMuNzc0OTIyMjggNTEuOTAzODM0MiwzLjc2MzMxNjA2IEM1Mi4wODk5NDgyLDMuNzUxMjk1MzQgNTIuMjU3NDA5MywzLjcwODYwMTA0IDUyLjQwODI5MDIsMy42NDkzMjY0MiBDNTIuNTU3OTI3NSwzLjU5MDA1MTgxIDUyLjY4MjY5NDMsMy40OTM4ODYwMSA1Mi43ODEzNDcyLDMuMzY3MDQ2NjMgQzUyLjg4MDgyOSwzLjI0MDYyMTc2IDUyLjkyOTc0MDksMy4wNjExMzk5IDUyLjkyOTc0MDksMi44MzE1MDI1OSBDNTIuOTI5NzQwOSwyLjYxODAzMTA5IDUyLjg4NjIxNzYsMi40NDcyNTM4OSA1Mi43OTkxNzEsMi4zMjA4MjkwMiBDNTIuNzEyMTI0NCwyLjE5Mzk4OTY0IDUyLjYwMTQ1MDgsMi4wOTY5OTQ4MiA1Mi40Njc1NjQ4LDIuMDI5NDMwMDUgQzUyLjMzMjQzNTIsMS45NjI2OTQzIDUyLjE3ODIzODMsMS45MzExOTE3MSA1Mi4wMDQ1NTk2LDEuOTA3NTY0NzcgQzUxLjgzMDg4MDgsMS44ODMxMDg4MSA1MS42NjA1MTgxLDEuODg2MDEwMzYgNTEuNDk0MzAwNSwxLjg4NjAxMDM2IEw1MC4zMDI1OTA3LDEuODg2MDEwMzYgTDUwLjMwMjU5MDcsMy43OTQ4MTg2NSBMNTAuMzAyNTkwNywzLjc5NDgxODY1IEw1MC4zMDI1OTA3LDMuNzk0ODE4NjUgTDUwLjMwMjU5MDcsMy43OTQ4MTg2NSBaIiBpZD0iRmlsbC04Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNS45Mzk3NTUzLDUuNDk0OTQyNTUgTDEyLjIwODM1NjMsMC44NDU3NjU0NTUgQzExLjk3NjY0NjUsMC41NTUzNDcwMjYgMTEuNDgyNTUzMiwwLjM0NDM1OTI3NSAxMS4xMTAzMjUyLDAuMzQ0MzU5Mjc1IEw1LjEyNjQ5MTAzLDAuMzQ0MzU5Mjc1IEM0Ljc1NDI2MzA1LDAuMzQ0MzU5Mjc1IDQuMjYwMTY5NzgsMC41NTUzNDcwMjYgNC4wMjg0NTk5MywwLjg0NTc2NTQ1NSBMMC4yOTcwNjA5NjYsNS41MDExNDgwNiBDMC4wNjUzNTExMjE3LDUuNzkxMTUyNzkgLTAuMDU2OTI4NjcxMSw2LjMxOTg2MzI1IDAuMDI1OTcyODgzNSw2LjY4MTg1MjA2IEwxLjM1Nzc4NjM1LDEyLjUwNDcwMDIgQzEuNDQwMjczNCwxMi44NjY2ODkgMS43ODIyNDIzMSwxMy4yOTM2Mjg5IDIuMTE3NTc5MSwxMy40NTQ1NTg4IEw3LjUwOTA4MTcsMTYuMDQ1MTU3NCBDNy44NDQwMDM5OCwxNi4yMDYwODczIDguMzkyODEyMjcsMTYuMjA2MDg3MyA4LjcyNzczNDU1LDE2LjA0NDc0MzcgTDE0LjExOTIzNzEsMTMuNDUyOTA0IEMxNC40NTQ1NzM5LDEzLjI5MjM4NzggMTQuNzk2NTQyOCwxMi44NjQyMDY4IDE0Ljg3OTAyOTksMTIuNTAyMjE4IEwxNi4yMTA4NDM0LDYuNjc5MzY5ODcgQzE2LjI5Mzc0NDksNi4zMTczODEwNiAxNi4xNzE0NjUxLDUuNzg1MzYwOTkgMTUuOTM5NzU1Myw1LjQ5NDk0MjU1IE0xMS4zMTkyMzcxLDUuNzA1NTE2NiBMOC40NDg3NzA4MiwxMC45MDU3NDQgQzguMjY5Mjg4OTUsMTEuMjMwOTEzNCA3Ljk3NTgxNzQ1LDExLjIzMDkxMzQgNy43OTYzMzU1OSwxMC45MDU3NDQgTDQuOTI1NDU0NzYsNS43MDU1MTY2IEM0Ljc0NTk3Mjg5LDUuMzgwMzQ3MjMgNC44ODUyNDc1LDUuMjE3NzYyNTcgNS4yMzUwOTIwNiw1LjM0NDM1NTE5IEw3LjQ4MjU1MzIsNi4xNTk3NjA3OSBDNy44MzIzOTc3Niw2LjI4Njc2NzE3IDguNDA0NDE4NDksNi4yODY3NjcxNyA4Ljc1NDI2MzA1LDYuMTYwMTc0NTEgTDExLjAxMDAxNDMsNS4zNDQzNTUxOSBDMTEuMzU5NDQ0NCw1LjIxNzM0ODg1IDExLjQ5ODcxOSw1LjM4MDM0NzIzIDExLjMxOTIzNzEsNS43MDU1MTY2IiBpZD0iRmlsbC05Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=='

    return (
      <div className="navigation-bar">
        <div className="header-row">
          <ul className="center-horizon">
            <li><img className="center" src={logo} /></li>
          </ul>
        </div>

        <div className="header-row">
          <ul>
            <li className="padding"><a href="#"><b>Shop</b></a></li>
            <li className="padding"><a href="#"><b>Journal</b></a></li>
            <li className="padding"><a href="#"><b>About</b></a></li>
            <li className="padding"><a href="#"><b>More</b></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
