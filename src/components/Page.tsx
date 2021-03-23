import React from 'react'
import styles from '../styles/Layout.module.scss'
import Head from 'next/head'
import Link from 'next/link'

interface PageProps {
  title?: string
  titleOverride?: string
  displayTitle?: string

  backPath?: string
}

export const Page: React.FC<PageProps> = (props) => {
  const {
    title,
    titleOverride = `${title} — Site Name`,
    displayTitle = title,
  } = props

  return (
    <div className={styles.PageContainer}>
      <Head>
        <title>{titleOverride}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.MainSection}>{props.children}</main>
    </div>
  )
}
