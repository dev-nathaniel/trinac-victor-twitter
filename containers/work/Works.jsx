import styles from './works.module.css'
import {gsap} from 'gsap'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const Works = () => {

    const mocRef = useRef()
    const mocRefLine = useRef()
    const jabRef = useRef(null)
    const jabRefLine = useRef(null)
    const opRef = useRef(null)
    const opRefLine = useRef(null)
    const rajRef = useRef(null)
    const rajRefLine = useRef(null)
    const getRef = useRef(null)
    const getRefLine = useRef(null)
    // const moc = mocRef.current
    // const jab = jabRef.current
    // const op = opRef.current
    // const raj = rajRef.current
    // const get = getRef.current

    // const menuItem = useRef()

    //const imageWrapperBounds = imageWrapper.getBoundingClientRect()

    // const item = menuItem.current
    //const itemBounds = item.getBoundingClientRect()

    const onMouseEnter = (ref, refLine) => {
        gsap.set(ref.current, {
            // scale: 0.8,
            yPercent: 15,
        });
        gsap.to(refLine.current, {
            width: '10%'
        })
        gsap.to(ref.current, {opacity: 1, scale: 1, yPercent: 0, rotation: 0})
    }

    const onMouseLeave = (ref, refLine) => {
        gsap.to(ref.current, {
            opacity: 0,
            yPercent: 15,
            // scale: 0.8,
        })
        gsap.to(refLine.current, {
            width: 0,
            ease: 'power4.out'
        })
    }

    // const onMouseMove = ({x , y}) => {
    //     gsap.to(imageWrapper, {
    //         duration: 1.25,
    //         x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 1.55,
    //         y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height /2
    //     })
    // }

    useEffect(() => {
        gsap.defaults({
            duration: 0.55,
            ease: 'expo.out',
        })

        
    }, [])
    return (
        <div id='work' className={styles.works}>
            <div className={styles.worksCont}>
                <div className={styles.leftWorks}>
                    <div>
                        <p>WORKS (5)</p>
                    </div>
                    <div>
                        <p style={{color: '#d8d8d8'}}>ALL</p>
                        <p>MOBILE</p>
                        <p>WEB</p>
                        <p>API</p>
                    </div>
                </div>
                <div className={styles.rightWorks}>
                    <Link href={'/works/1'}>
                    <div className={styles.work} onMouseLeave={()=>onMouseLeave(mocRef, mocRefLine)} onMouseEnter={()=>onMouseEnter(mocRef, mocRefLine)}>
                        <div ref={mocRefLine}></div>
                        <p>MOCVIEW</p>
                        <div ref={mocRef} className={styles.imgWrapper}>
                            <div className={styles.imgInner}>
                                <img src='/mocview.png' />
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link href={'/works/2'}>
                    <div onMouseLeave={()=>onMouseLeave(jabRef, jabRefLine)} className={styles.work} onMouseEnter={()=>onMouseEnter(jabRef, jabRefLine)}>
                        <div ref={jabRefLine}></div>
                        <p>JABBURR</p>
                        <div ref={jabRef} className={styles.imgWrapper}>
                            <div className={styles.imgInner}>
                                <img src='/jabburr.jpg' />
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link href={'/works/3'}>
                    <div onMouseLeave={()=>onMouseLeave(opRef, opRefLine)} className={styles.work} onMouseEnter={()=>onMouseEnter(opRef, opRefLine)}>
                        <div ref={opRefLine}></div>
                        <p>OPINATIO</p>
                        <div ref={opRef} className={styles.imgWrapper}>
                            <div className={styles.imgInner}>
                                <img src='/opinatio.jpg' />
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link href={'/works/4'}>
                    <div onMouseLeave={()=>onMouseLeave(rajRef, rajRefLine)} className={styles.work} onMouseEnter={()=>onMouseEnter(rajRef, rajRefLine)}>
                        <div ref={rajRefLine}></div>
                        <p>RAJNETTI</p>
                        <div ref={rajRef} className={styles.imgWrapper}>
                            <div className={styles.imgInner}>
                                <img src='/rajnetti.jpg' />
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link href={'/works/5'}>
                    <div onMouseLeave={()=>onMouseLeave(getRef, getRefLine)} className={styles.work} onMouseEnter={()=>onMouseEnter(getRef, getRefLine)}>
                        <div ref={getRefLine}></div>
                        <p>GET-HIRING</p>
                        <div ref={getRef} className={styles.imgWrapper}>
                            <div className={styles.imgInner}>
                                <img src='/getHiring.jpg' />
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Works;