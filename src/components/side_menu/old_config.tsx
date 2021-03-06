import { useTranslation } from 'react-i18next'
import { v4 as uuid } from 'uuid'
import {
  BsLinkedin,
  BsTelegram,
  BsTwitter,
  BsGithub,
  BsFillArrowRightSquareFill
} from 'react-icons/bs'

const CONFIG = () => {
  const { t } = useTranslation('common')

  return ([
    {
      id: uuid(),
      name: t('menu.home'),
      icon: <svg width="20" height="21" viewBox="0 0 20 21"><path d="M19.55 8.117L10.567.157a.967.967 0 0 0-1.056 0L.528 8.117C.211 8.327 0 8.746 0 9.06v11.312c0 .314.317.628.634.628H6.34v-6.389c0-.524.423-.943.952-.943h5.389c.528 0 .951.42.951.943V21h5.706c.317 0 .635-.314.635-.628V9.06c.105-.314-.106-.838-.423-.943"></path></svg>,
      url: '/'
    },
    {
      id: uuid(),
      name: t('menu.explore'),
      icon: <svg viewBox="0 0 21.8 21.8" width="20" height="20"><path d="M10.9 21.8C4.9 21.8 0 16.9 0 10.9S4.9 0 10.9 0s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9zM12 2.1c-.5-.1-1.8-.1-2 0-4.1.4-7.5 3.7-8 7.8-.1.5-.1 1.8 0 2 .4 4.2 3.8 7.6 8 8h2c4.1-.5 7.4-3.8 7.8-8v-2C19.2 5.8 16 2.6 12 2.1zm1.7 11.3c-.1.2-.2.3-.4.4l-6.7 2.5c-.5.2-1.1-.3-.9-.9l2.5-6.7c.1-.2.2-.3.4-.4l6.7-2.5c.5-.2 1.1.3.9.9l-2.5 6.7zm-1.9-3.3c-.5-.5-1.3-.5-1.7 0-.5.5-.5 1.3 0 1.7.5.5 1.3.5 1.7 0 .4-.4.4-1.2 0-1.7z"></path></svg>,
      url: '/explore/cats'
    },
    {
      id: uuid(),
      name: t('menu.inbox'),
      icon: <svg viewBox="0 0 23 16.9" width="20" height="20"><path d="M20.9 0H2.1C.6 0 0 .7 0 2.2v12.5c0 1.6.6 2.2 2.1 2.2h18.8c1.5 0 2.1-.7 2.1-2.2V2.2C23 .7 22.4 0 20.9 0zm.4 13.6c.3.3-.2.8-.5 1.1-.1.2-.3.5-.5.5s-.2.1-.3-.1l-5.5-5-.6.5c-.7.6-1.6 1.1-2.4 1.1-.9 0-1.7-.4-2.4-1.1l-.6-.6-5.2 4.8c-.1.1-.3.2-.5.2s-.4-.1-.5-.2c-.3-.3-.8-1-.5-1.3l5.1-4.9-5-5c-.3-.3.1-.8.3-1.1.3-.3.8-.4 1.1-.2L10 8.9c.4.4.9.8 1.4.9.6 0 1.1-.4 1.6-.9l6.6-6.7c.3-.3.9 0 1.2.3.3.3.4 1 .2 1.2l-4.9 4.8 5.2 5.1z"></path></svg>,
      url: '#'
    },
    {
      id: uuid(),
      name: t('menu.messaging'),
      icon: <svg viewBox="0 0 21 21" width="20" height="20"><path d="M10.5 0C4.7 0 0 4.722 0 10.55c0 2.21.7 4.22 1.8 5.828l-.7 4.12 4.5-.704C7.1 20.598 8.8 21 10.5 21 16.3 21 21 16.278 21 10.45S16.3 0 10.5 0zM5.9 7.636c0-.904.8-1.708 1.7-1.708.9 0 1.7.804 1.7 1.708 0 .905-.8 1.708-1.7 1.708-.9 0-1.7-.803-1.7-1.708zm4.6 8.44c-2.1 0-3.9-1.105-4.6-2.712-.3-.603.3-1.307 1.1-1.307h6.8c.8 0 1.4.704 1.1 1.307-.5 1.607-2.3 2.713-4.4 2.713zm2.9-6.832c-.9 0-1.7-.804-1.7-1.708 0-.904.8-1.708 1.7-1.708.9 0 1.7.804 1.7 1.708 0 .904-.7 1.708-1.7 1.708z"></path></svg>,
      url: '#'
    },
    {
      id: uuid(),
      name: t('menu.activity'),
      icon: <svg viewBox="0 0 13.8 19.6" width="20" height="20"><path d="M3.5 19.5c-.1 0-.2-.1-.2-.1-.6-.3-.9-.9-.7-1.5l2.2-5.8H1.3c-.1 0-.3 0-.4-.1-.4-.1-.6-.3-.8-.6-.2-.4-.2-1 .2-1.4L8.9.5c.3-.4.9-.6 1.4-.4.1 0 .2.1.2.1.6.3.9.9.7 1.5L9 7h3.5c.1 0 .3 0 .4.1.4.1.6.5.7.8.2.4.2 1-.2 1.4L4.8 19c-.2.3-.6.5-1 .5 0 .1-.2.1-.3 0z"></path></svg>,
      url: '#'
    },
    {
      id: uuid(),
      name: t('menu.likes'),
      icon: <svg role="img" width="20" height="18" viewBox="0 0 20 18"><path d="M17.888 1.1C16.953.38 15.87 0 14.758 0c-1.6 0-3.162.76-4.402 2.139-.098.109-.217.249-.358.42a12.862 12.862 0 0 0-.36-.421C8.4.758 6.84 0 5.248 0 4.14 0 3.06.381 2.125 1.1-.608 3.201-.44 6.925 1.14 9.516c2.186 3.59 6.653 7.301 7.526 8.009.38.307.851.474 1.333.474a2.12 2.12 0 0 0 1.332-.473c.873-.71 5.34-4.42 7.526-8.01 1.581-2.597 1.755-6.321-.968-8.418"></path></svg>,
      url: '#'
    },
    {
      id: uuid(),
      name: t('menu.following'),
      icon: <svg viewBox="0 0 20 21" width="20" height="21"><path d="M11.5 8.8c0-1.5-1.2-2.8-2.6-2.8-1.4 0-2.6 1.3-2.6 2.8 0 1.5 1.2 2.2 2.6 2.2 1.5 0 2.6-.7 2.6-2.2zM5 16.2v.8h7.7v-.8c0-3-1.7-4.2-3.9-4.2C6.7 12 5 13.2 5 16.2zM16 19H2V4h10V2H2C.9 2 0 2.9 0 4v14.9C0 20.1.9 21 2 21h14.2c1.1 0 1.8-.9 1.8-2.1V8h-2v11zm2-17V0h-2v2h-2v2h2v2h2V4h2V2h-2z"></path></svg>,
      url: '#'
    },
    {
      id: uuid(),
      name: t('menu.settings'),
      icon: <svg width="20" height="20" viewBox="0 0 24 24"><path d="M24 10.526l-.36-.12-2.94-.962-.78-1.925 1.5-3.248-1.92-1.985-.36.18-2.76 1.444-1.86-.782L13.32 0h-2.58l-.12.421-1.08 2.707-1.86.782L4.5 2.346 2.58 4.33l1.56 3.188-.78 1.925L0 10.586v2.828l.36.12 2.94 1.083.78 1.924-1.5 3.309 1.92 1.985.36-.18 2.76-1.444 1.86.781L10.68 24h2.58l.12-.36 1.08-2.587 1.86-.782 3.18 1.564 1.92-1.985-.18-.361-1.38-2.827.78-1.925 3.3-1.203v-3.008H24zM7.2 11.97c0-2.647 2.16-4.812 4.8-4.812 2.64 0 4.8 2.165 4.8 4.812 0 2.647-2.16 4.812-4.8 4.812-2.64 0-4.8-2.165-4.8-4.812z"></path></svg>,
      url: '#',
      childs: [
        {
          name: t('menu.settings_account'),
          url: '#'
        },
        {
          name: t('menu.settings_dashboard'),
          url: '#'
        },
        {
          name: t('menu.settings_notifications'),
          url: '#'
        },
        {
          name: t('menu.settings_ads'),
          url: '#'
        },
        {
          name: t('menu.settings_post_and_subs'),
          url: '#'
        },
        {
          name: t('menu.settings_apps'),
          url: '#'
        },
        {
          name: t('menu.settings_privacy'),
          url: '#'
        },
        {
          name: t('menu.settings_labs'),
          url: '#'
        },
        {
          name: t('menu.settings_logout'),
          url: '#'
        }
      ]
    },
    {
      id: uuid(),
      name: t('menu.go'),
      icon: <svg width="20" height="20" viewBox="0 0 24 24" role="img"><circle cx="7.5" cy="4.5" r="1.5"></circle><path d="m16.17 15.524-.736.141.736-.141Zm.291 1.441-.736-.142.736.142Zm-.013 0 .736-.142-.736.142Zm.29-13.489.737-.141-.736.141Zm-.277-1.441-.736.142.736-.142Zm-.013 0 .736.142-.736-.142Zm-.723.142.277 1.441 1.473-.283-.277-1.442-1.473.284Zm.277 13.205-.277 1.441 1.473.284.277-1.442-1.473-.283Zm1.182 1.441-.277-1.441-1.473.283.277 1.442 1.473-.284Zm-.277-13.205.277-1.441-1.473-.284-.277 1.442 1.473.283Zm-5.633 6.58c2.888-1.05 5.05-3.555 5.633-6.58l-1.473-.283c-.481 2.5-2.273 4.58-4.673 5.454l.513 1.41Zm0-1.396c.652.237.652 1.159 0 1.396l-.513-1.41c-.664.242-.664 1.182 0 1.423l.513-1.41Zm5.633 6.58c-.583-3.025-2.745-5.53-5.633-6.58l-.513 1.41c2.4.873 4.192 2.953 4.673 5.453l1.473-.283Zm-1.182 1.441c.154-.803 1.305-.803 1.46 0l-1.474.284c.158.819 1.33.818 1.487 0l-1.473-.284Zm5.91-8.021c-2.888 1.05-5.05 3.555-5.633 6.58l1.473.283c.482-2.5 2.273-4.58 4.673-5.454l-.513-1.41Zm0 1.396c-.652-.237-.652-1.159 0-1.396l.513 1.41c.664-.242.664-1.182 0-1.423l-.513 1.41Zm-5.633-6.58c.583 3.025 2.745 5.53 5.633 6.58l.513-1.41c-2.4-.873-4.192-2.953-4.673-5.453l-1.473.283Zm1.196-1.725c-.158-.818-1.33-.818-1.487 0l1.473.284c-.154.803-1.305.803-1.46 0l1.474-.284Z"></path><path d="m3.272 16.412-.23-.714.23.714Zm-.252.095-.23.713.23-.713Zm0-.014.23.714-.23-.713Zm4.27 4.534-.734.158.733-.158Zm.217.942.733.159-.733-.159Zm-.014 0-.733.159.733-.159Zm4.487-5.476-.23.714.23-.713Zm0 .014-.23-.714.23.713Zm-.252-.095-.231.714.23-.714Zm-4.221-5.381.733-.159-.733.159Zm-.014 0-.733-.159.733.159Zm-.72.159.205.942 1.466-.317-.204-.943-1.466.318Zm4.724 5.936.252.081.462-1.427-.252-.082-.462 1.428Zm.252-1.333-.252.081.462 1.428.252-.082-.462-1.427Zm-4.771 5.075-.204.943 1.466.317.204-.943-1.466-.317Zm1.248.943-.204-.943-1.466.317.204.943 1.466-.317Zm-4.723-5.937-.252-.081-.462 1.427.252.082.462-1.428Zm-.252 1.333.252-.081-.462-1.428-.252.082.462 1.427Zm4.771-5.075.204-.942-1.466-.318-.204.943 1.466.317Zm-4.52 4.994a6.75 6.75 0 0 0 4.52-4.994l-1.466-.317a5.25 5.25 0 0 1-3.515 3.883l.462 1.428Zm-.251-1.333c.686.222.686 1.192 0 1.414l-.462-1.427c-.698.226-.698 1.214 0 1.44l.462-1.427Zm4.771 5.075a6.75 6.75 0 0 0-4.52-4.994l-.46 1.428a5.25 5.25 0 0 1 3.514 3.883l1.466-.317Zm-1.248.943c.169-.782 1.283-.782 1.452 0l-1.466.317c.173.795 1.307.796 1.48 0l-1.466-.317Zm4.723-5.937a6.75 6.75 0 0 0-4.52 4.994l1.467.317a5.25 5.25 0 0 1 3.515-3.883l-.462-1.428Zm.252 1.333c-.686-.222-.686-1.192 0-1.414l.462 1.427c.698-.226.698-1.214 0-1.44l-.462 1.427Zm-4.771-5.075a6.75 6.75 0 0 0 4.519 4.994l.462-1.428a5.25 5.25 0 0 1-3.515-3.883l-1.466.317Zm1.262-1.26c-.173-.795-1.307-.796-1.48 0l1.466.318c-.169.78-1.283.78-1.452 0l1.466-.318Z"></path></svg>,
      url: '#'
    },
    {
      id: uuid(),
      name: t('menu.help'),
      icon: <svg viewBox="0 0 20 20" width="20" height="20"><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM8.7 13.7h2.6v2.5H8.7v-2.5zM14 8.6c-.2.6-.7 1.1-1.2 1.5-.2.2-.5.3-.7.5l-.6.6c-.2.2-.3.5-.3.8v.6H8.9v-.7c0-.5.1-.9.3-1.2.1-.3.3-.6.5-.8l.6-.6c.3-.1.5-.3.7-.5l.5-.5c.1-.2.2-.4.2-.7 0-.5-.1-.9-.4-1.1-.2-.2-.6-.4-1-.4-.3 0-.6.1-.8.2-.3 0-.5.2-.6.4-.2.2-.3.4-.3.7-.1.2-.1.5-.1.8H6c0-.6.1-1.1.3-1.6.2-.5.5-.9.8-1.3.4-.4.8-.7 1.3-.9.5-.2 1.1-.3 1.6-.3.8 0 1.4.1 2 .3.5.2.9.5 1.3.8.3.3.6.7.7 1 .1.4.2.7.2 1 0 .6-.1 1.1-.2 1.4z"></path></svg>,
      url: '#'
    },
    {
      id: uuid(),
      name: t('menu.change_palette'),
      icon: <svg width="20" height="20" viewBox="0 0 24 24"><path d="M11.933 0C5.326 0 0 5.356 0 12s5.326 12 11.933 12a2.034 2.034 0 0 0 2.022-2.034c0-.542-.202-1.017-.54-1.356-.336-.339-.471-.813-.471-1.356 0-1.085.876-2.034 2.022-2.034h2.36c3.64 0 6.674-2.983 6.674-6.712C23.933 4.814 18.54 0 11.933 0zM4.652 12a2.034 2.034 0 0 1-2.023-2.034c0-1.085.877-2.034 2.023-2.034a2.034 2.034 0 0 1 0 4.068zm3.977-5.288a2.034 2.034 0 0 1-2.022-2.034c0-1.085.876-2.034 2.022-2.034s2.023.881 2.023 2.034c0 1.085-.877 2.034-2.023 2.034zm6.674 0a2.034 2.034 0 0 1-2.022-2.034c0-1.085.876-2.034 2.022-2.034 1.079 0 2.023.881 2.023 2.034-.068 1.085-.944 2.034-2.023 2.034zM19.281 12a2.034 2.034 0 0 1-2.023-2.034c0-1.085.877-2.034 2.023-2.034 1.079 0 2.022.882 2.022 2.034C21.236 11.12 20.36 12 19.281 12z"></path></svg>,
      url: '#'
    }
  ])
}

export default CONFIG;