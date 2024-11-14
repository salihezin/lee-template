import {useEffect} from 'react';
import Slider from "../../public/technoIt/components/Slider";
import CallDoAction from "../../public/technoIt/components/CallDoAction";
import {headScripts, scripts, styles} from "../app/technoId/constants";

export default function ClientOnlyComponent({data}) {
    const loadScript = (src, type = null, position = 'body') => {
        return new Promise((resolve, reject) => {
            if (typeof window !== 'undefined') {
                const script = document.createElement('script');
                if (type) {
                    script.type = type;
                }
                script.src = src;
                script.async = true;
                script.onload = () => resolve(src);
                script.onerror = () => reject(new Error(`Script yüklenemedi: ${src}`));

                if (position === 'head') {
                    document.head.appendChild(script);
                } else {
                    document.body.appendChild(script);
                }
            } else {
                reject(new Error('Window objesi tanımlı değil.'));
            }
        });
    };

    const loadScriptsSequentially = async () => {
        await loadScript(headScripts[0].src, headScripts[0].type || null, 'head');
        loadScript(scripts[0].src, scripts[0].type || null).then(() => {
            loadScript(scripts[1].src, scripts[1].type || null).then(() => {
                loadScript(scripts[2].src, scripts[2].type || null).then(() => {
                    loadScript(scripts[3].src, scripts[3].type || null).then(() => {
                        loadScript(scripts[4].src, scripts[4].type || null).then(() => {
                            loadScript(scripts[5].src, scripts[5].type || null).then(() => {
                                loadScript(scripts[6].src, scripts[6].type || null).then(() => {
                                    loadScript(scripts[7].src, scripts[7].type || null).then(() => {
                                        loadScript(scripts[8].src, scripts[8].type || null).then(() => {
                                            loadScript(scripts[9].src, scripts[9].type || null).then(() => {
                                                loadScript(scripts[10].src, scripts[10].type || null).then(() => {
                                                    loadScript(scripts[11].src, scripts[11].type || null).then(() => {
                                                        loadScript(scripts[12].src, scripts[12].type || null).then(() => {
                                                            loadScript(scripts[13].src, scripts[13].type || null).then(() => {
                                                                loadScript(scripts[14].src, scripts[14].type || null).then(() => {
                                                                    loadScript(scripts[15].src, scripts[15].type || null).then(() => {
                                                                        loadScript(scripts[16].src, scripts[16].type || null).then(() => {
                                                                            loadScript(scripts[17].src, scripts[17].type || null).then(() => {
                                                                                loadScript(scripts[18].src, scripts[18].type || null).then(() => {
                                                                                    loadScript(scripts[19].src, scripts[19].type || null).then(() => {
                                                                                        loadScript(scripts[20].src, scripts[20].type || null).then(() => {
                                                                                            loadScript(scripts[21].src, scripts[21].type || null).then(() => {
                                                                                                loadScript(scripts[22].src, scripts[22].type || null).then(() => {
                                                                                                    loadScript(scripts[23].src, scripts[23].type || null).then(() => {
                                                                                                        loadScript(scripts[24].src, scripts[24].type || null).then(() => {
                                                                                                            loadScript(scripts[25].src, scripts[25].type || null).then(() => {
                                                                                                                loadScript(scripts[26].src, scripts[26].type || null).then(() => {
                                                                                                                    loadScript(scripts[27].src, scripts[27].type || null).then(() => {
                                                                                                                    })
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        });
    };


    useEffect(() => {
        styles.forEach((cssFile) => {
            const link = document.createElement('link');
            link.rel = cssFile.rel;
            link.href = cssFile.href;
            link.type = cssFile.type;
            link.media = cssFile.media;
            document.head.appendChild(link);
        });

        loadScriptsSequentially();

        if (window.jQuery) {
            const script = document.createElement('script');
            script.innerHTML = `
             jQuery("#rev_slider_1").show().revolution({
                delay: 7000,
                responsiveLevels: [1200, 1140, 778, 480],
                gridwidth: [1140, 920, 700, 380],
                sliderLayout: "fullscreen",
                navigation: {
                    arrows: { enable: true, style: "vor_arrows", hide_onleave: false },
                    bullets: { enable: true, style: "vor_bullet", hide_onleave: false },
                },
            });
            
            jQuery("#rev_slider_2").show().revolution({
                delay: 7000,
                responsiveLevels: [1200, 1140, 778, 480],
                gridwidth: [1140, 920, 700, 380],
                sliderLayout: "auto",
                minHeight: 800,
                navigation: { arrows: { enable: true, style: "vor_arrows", hide_onleave: false }, bullets: { enable: true, style: "vor_bullet", hide_onleave: false } },
            });
            
            jQuery("#rev_slider_3").show().revolution({
                delay: 7000,
                responsiveLevels: [1200, 1140, 778, 480],
                gridwidth: [1140, 920, 700, 380],
                sliderLayout: "fullscreen",
                navigation: { arrows: { enable: false }, bullets: { enable: true, style: "vor_bullet", hide_onleave: false } },
            });
            `;
            script.type = 'text/javascript';
            document.body.appendChild(script);
        }

        return () => {
            headScripts.concat(scripts).forEach((scriptFile) => {
                const scriptTag = document.querySelector(`script[src="${scriptFile.src}"]`);
                if (scriptTag && scriptTag.parentNode) {
                    scriptTag.parentNode.removeChild(scriptTag);
                }
            });

            styles.forEach((cssFile) => {
                const linkTag = document.querySelector(`link[href="${cssFile.href}"]`);
                if (linkTag && linkTag.parentNode) {
                    linkTag.parentNode.removeChild(linkTag);
                }
            });
        };
    }, []);


    /*
    console a bakarak teker teker çöz
     */








    return (
        <>
            {/*<Loader/>*/}
            {/*<TopMenu/>*/}
            {/*<MainMenu/>*/}
            {/*<MobileMenu/>*/}
            <Slider/>
            <CallDoAction/>
            {/*<Flipbox/>*/}
            {/*<Service/>*/}
            {/*<CallDoActionTwo/>*/}
            {/*<CaseStudy/>*/}
            {/*<Team/>*/}
            {/*<TestimonialThree/>*/}
            {/*<Blog/>*/}
            {/*<FooterMiddle/>*/}

        </>
    );
}
