'use client';

import { useEffect } from 'react';
import './globals.css';

export default function Home() {
  useEffect(() => {
    document.querySelectorAll('.reveal').forEach((el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('vis');
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });
  }, []);

  return (
    <>
      {/* NAV */}
      <nav>
        <a className="nav-logo" href="#">
          <div className="logo-mark">
            <svg viewBox="0 0 20 20" fill="none">
              <polygon points="10,2 18,18 2,18" stroke="#C2603F" strokeWidth="1.5" fill="rgba(194,96,63,0.1)" />
              <polygon points="10,7 15,16 5,16" fill="rgba(194,96,63,0.18)" />
            </svg>
          </div>
          Triad Labs
        </a>
        <ul className="nav-links">
          <li><a href="#why">Why a studio</a></li>
          <li><a href="#how">How we build</a></li>
          <li><a href="#story">Our story</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Work with us</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">AI-native venture studio</div>
            <h1 className="hero-head">
              <span className="ln"><span className="wd">We build the products</span></span>
              <span className="ln"><span className="wd">we wish existed.</span></span>
              <span className="ln"><span className="wd">Right now, <em>that&apos;s Zodus.</em></span></span>
            </h1>
            <p className="hero-sub">
              Triad Labs is a studio of builders turning real problems into shipped products. Our current focus: Zodus — company memory for teams that live in Slack.
            </p>
            <div className="hero-actions">
              <a href="https://zodus.ai/" target="_blank" rel="noopener noreferrer" className="btn-primary">Meet Zodus <span className="arr">↗</span></a>
              <a href="#how" className="btn-text">How we build <span className="arr">→</span></a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hv-card">
              <div className="hv-top">
                <span className="hv-label">Zodus — Company memory</span>
                <span className="hv-status"><span className="hv-dot"></span>Live</span>
              </div>
              <div className="agent-nodes">
                <div className="an-row">
                  <div className="an-icon orch">DEC</div>
                  <div className="an-body">
                    <div className="an-name">Decisions</div>
                    <div className="an-task">Captured from threads</div>
                  </div>
                  <div className="an-bar"><div className="an-fill"></div></div>
                </div>
                <div className="an-row">
                  <div className="an-icon plan">ANS</div>
                  <div className="an-body">
                    <div className="an-name">Answers</div>
                    <div className="an-task">In plain language, with sources</div>
                  </div>
                  <div className="an-bar"><div className="an-fill"></div></div>
                </div>
                <div className="an-row">
                  <div className="an-icon exec">FLW</div>
                  <div className="an-body">
                    <div className="an-name">Workflows</div>
                    <div className="an-task">How you did it last time</div>
                  </div>
                  <div className="an-bar"><div className="an-fill"></div></div>
                </div>
                <div className="an-row">
                  <div className="an-icon mem">MEM</div>
                  <div className="an-body">
                    <div className="an-name">Memory</div>
                    <div className="an-task">Slack first · then email, docs</div>
                  </div>
                  <div className="an-bar"><div className="an-fill"></div></div>
                </div>
              </div>
              <div className="hv-footer">
                <div className="hv-stat"><span className="hv-stat-n">Slack</span><span className="hv-stat-l">Where you work</span></div>
                <div className="hv-stat"><span className="hv-stat-n">$100</span><span className="hv-stat-l">Free credits</span></div>
                <div className="hv-stat"><span className="hv-stat-n">Live</span><span className="hv-stat-l">zodus.ai</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="strip">
        <div className="strip-track">
          <span className="strip-item">Venture studio</span>
          <span className="strip-item">Idea to MVP in days</span>
          <span className="strip-item">Operators, not consultants</span>
          <span className="strip-item">Company memory</span>
          <span className="strip-item">Shipped, not slideware</span>
          <span className="strip-item">Built to compound</span>
          <span className="strip-item">Venture studio</span>
          <span className="strip-item">Idea to MVP in days</span>
          <span className="strip-item">Operators, not consultants</span>
          <span className="strip-item">Company memory</span>
          <span className="strip-item">Shipped, not slideware</span>
          <span className="strip-item">Built to compound</span>
        </div>
      </div>

      {/* WHY A STUDIO */}
      <section className="sec pos-sec" id="why">
        <div className="sec-inner">
          <div className="pos-grid reveal">
            <div className="pos-copy">
              <div className="s-label">Why a studio</div>
              <h2 className="s-head">Everyone has ideas.<br />Few <em>actually ship them.</em></h2>
              <div>
                <p>There&apos;s a difference between talking about building and actually shipping a product that people use.</p>
                <p>Triad Labs is a venture studio that builds — we run experiments against real problems, get a working MVP into users&apos; hands fast, and back the ones that work.</p>
                <p>One narrow problem, solved deeply, <strong>compounded over time</strong>. That&apos;s how we pick what to build.</p>
              </div>
            </div>
            <div className="pos-right">
              <div className="pos-item">
                <div className="pi-title">Operators, not consultants</div>
                <div className="pi-desc">Every Triad project is a product we own and run ourselves — never a deliverable for someone else.</div>
              </div>
              <div className="pos-item">
                <div className="pi-title">One problem, solved deeply</div>
                <div className="pi-desc">One narrow problem, compounded over time. That&apos;s how we choose what to build — and what to ignore.</div>
              </div>
              <div className="pos-item">
                <div className="pi-title">MVP in days, not quarters</div>
                <div className="pi-desc">We get a working product in front of real users fast, learn what&apos;s true, and back the bets that work.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE BUILD */}
      <section className="sec how-sec" id="how">
        <div className="sec-inner">
          <div className="reveal">
            <div className="s-label">How we build</div>
            <h2 className="s-head">From idea to live. <em>Fast.</em></h2>
          </div>
          <div className="how-grid reveal">
            <div className="how-card">
              <span className="hc-num">Step 01 — Find</span>
              <h3 className="hc-title">We find a problem<br />worth solving.</h3>
              <p className="hc-desc">We run experiments against real problems — job search, workplace engagement, conservation. If it matters and we can build it, we start.</p>
              <div className="hc-tags">
                <span className="hc-tag">Real problems</span>
                <span className="hc-tag">Experiments</span>
                <span className="hc-tag">Job search</span>
                <span className="hc-tag">Conservation</span>
              </div>
            </div>
            <div className="how-card">
              <span className="hc-num">Step 02 — Ship</span>
              <h3 className="hc-title">We ship<br />the MVP.</h3>
              <p className="hc-desc">Design, engineering, and growth in one tight loop. We build a working product, put it in front of users, and learn what&apos;s true.</p>
              <div className="hc-tags">
                <span className="hc-tag">Design</span>
                <span className="hc-tag">Engineering</span>
                <span className="hc-tag">Growth</span>
                <span className="hc-tag">Real users</span>
              </div>
            </div>
            <div className="how-card">
              <span className="hc-num">Step 03 — Scale</span>
              <h3 className="hc-title">We take it<br />to market.</h3>
              <p className="hc-desc">Winning experiments become real products — Zeke is live, OnBloom is next. We back the bets that work and scale them.</p>
              <div className="hc-tags">
                <span className="hc-tag">Zeke live</span>
                <span className="hc-tag">OnBloom next</span>
                <span className="hc-tag">Back winners</span>
                <span className="hc-tag">Scale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="sec proof-sec" id="story">
        <div className="sec-inner">
          <div className="proof-inner reveal">
            <div>
              <div className="s-label">Our story</div>
              <h2 className="s-head">Two builders.<br />One muscle: <em>shipping.</em></h2>
              <div className="proof-quote">
                <p className="pq-text">&ldquo;We met building together at hackathons — <em>shipping working products in 48 hours</em> — and that&apos;s the same muscle behind everything we build today.&rdquo;</p>
                <div className="pq-attr">
                  <span><strong>Varun &amp; Ferran</strong> — Founders, Triad Labs</span>
                </div>
              </div>
            </div>
            <div className="proof-stats">
              <div className="ps-cell"><span className="ps-n">Zodus</span><span className="ps-l">Company memory for Slack · live</span></div>
              <div className="ps-cell"><span className="ps-n">Zeke</span><span className="ps-l">Shipped &amp; live</span></div>
              <div className="ps-cell"><span className="ps-n">OnBloom</span><span className="ps-l">Launching next</span></div>
              <div className="ps-cell"><span className="ps-n">48h</span><span className="ps-l">Our hackathon origin</span></div>
            </div>
            <div className="people">
              <div className="people-faces">
                <span className="people-face"><img src="/peeps/peep-3.png" alt="Varun" /></span>
                <span className="people-face"><img src="/peeps/peep-7.png" alt="Ferran" /></span>
              </div>
              <p className="people-copy"><strong>Made by Varun and Ferran.</strong> Builders who ship — and who&apos;d love to compare notes on what you&apos;re working on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NOW BUILDING — ZODUS */}
      <section className="sec get-sec" id="zodus">
        <div className="sec-inner">
          <div className="reveal">
            <div className="s-label">Now building</div>
            <h2 className="s-head">Zodus — <em>company memory</em><br />for teams that live in Slack.</h2>
          </div>
          <div className="get-grid reveal">
            <div className="get-card">
              <div className="gc-icon">◈</div>
              <h3 className="gc-title">Decisions</h3>
              <p className="gc-desc">Captured straight from your threads — the call, the context, and the why, without anyone writing it up.</p>
              <ul className="gc-list">
                <li>Pulled from Slack threads</li>
                <li>Keeps the full context</li>
                <li>Searchable forever</li>
              </ul>
            </div>
            <div className="get-card">
              <div className="gc-icon">⬡</div>
              <h3 className="gc-title">Answers</h3>
              <p className="gc-desc">In plain language, with sources — so anyone can get unstuck without pinging the whole team again.</p>
              <ul className="gc-list">
                <li>Plain-language replies</li>
                <li>Linked back to the source</li>
                <li>Self-serve, day one</li>
              </ul>
            </div>
            <div className="get-card">
              <div className="gc-icon">▣</div>
              <h3 className="gc-title">Workflows</h3>
              <p className="gc-desc">How you did it last time, ready to reuse — the playbook your team keeps relearning from scratch.</p>
              <ul className="gc-list">
                <li>Captured playbooks</li>
                <li>Reusable, step by step</li>
                <li>Onboard people faster</li>
              </ul>
            </div>
          </div>
          <div className="zodus-cta reveal">
            <a href="https://zodus.ai/" target="_blank" rel="noopener noreferrer" className="btn-primary">Meet Zodus <span className="arr">↗</span></a>
            <span className="zodus-note">Memory starts in Slack — then email, docs, and the rest of where work happens.</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec faq-sec" id="faq">
        <div className="sec-inner">
          <div className="reveal">
            <div className="s-label">FAQ</div>
            <h2 className="s-head">Questions, <em>answered.</em></h2>
          </div>
          <div className="faq-list reveal">
            <details className="faq-item">
              <summary>What does Triad Labs do?<span className="faq-mark"></span></summary>
              <p>We&apos;re a venture studio. We design, build, and ship our own products — we don&apos;t consult or advise. Right now our focus is Zodus, company memory for teams that live in Slack.</p>
            </details>
            <details className="faq-item">
              <summary>What are you building right now?<span className="faq-mark"></span></summary>
              <p>Zodus is the current flagship — company memory that captures decisions, answers, and workflows from Slack. We&apos;ve also shipped Zeke and OnBloom.</p>
            </details>
            <details className="faq-item">
              <summary>Do you take on client work?<span className="faq-mark"></span></summary>
              <p>No. We&apos;re operators, not consultants. Every Triad project is a product we own and run ourselves, not a deliverable for someone else.</p>
            </details>
            <details className="faq-item">
              <summary>How do you decide what to build?<span className="faq-mark"></span></summary>
              <p>One narrow problem, solved deeply, compounded over time. We run experiments against real problems, get a working MVP in front of users fast, and back the ones that work.</p>
            </details>
            <details className="faq-item">
              <summary>Who&apos;s behind Triad?<span className="faq-mark"></span></summary>
              <p>Varun and Ferran. We met building together at hackathons — shipping working products in 48 hours — and that&apos;s the same muscle behind everything we build today.</p>
            </details>
            <details className="faq-item">
              <summary>How do I get in touch?<span className="faq-mark"></span></summary>
              <p>Reach out at founders@triadlabs.ai. Whether you want to partner, invest, or just compare notes on what we&apos;re building, we&apos;d love to hear from you.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section className="cta-sec" id="contact">
        <div className="cta-inner">
          <div className="cta-left reveal">
            <div className="s-label">Work with us</div>
            <h2 className="cta-head">We&apos;ve implemented AI in startups and <em>enterprises.</em></h2>
            <p className="cta-sub">From zero-to-one products to AI inside established teams — if you&apos;re figuring out where AI actually fits, let&apos;s talk.</p>
            <div className="cta-actions">
              <a href="mailto:founders@triadlabs.ai?subject=AI%20consultation" className="cta-btn">Schedule a consultation <span className="arr">→</span></a>
            </div>
            <div className="cta-or">or</div>
            <div className="cta-email">Reach us directly at <a href="mailto:founders@triadlabs.ai">founders@triadlabs.ai</a></div>
          </div>

          <div className="cta-visual reveal">
            <div className="cv-row">
              <span className="cvr-label">Studio</span>
              <span className="cvr-val green">Operators, not consultants</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">Flagship</span>
              <span className="cvr-val green">Zodus · live</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">Also shipped</span>
              <span className="cvr-val dim">Zeke · OnBloom</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">Founders</span>
              <span className="cvr-val dim">Varun &amp; Ferran</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">Idea to MVP</span>
              <span className="cvr-val dim">In days, not quarters</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">Client work</span>
              <span className="cvr-val dim">We build our own</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">Reach us</span>
              <span className="cvr-val green">founders@triadlabs.ai</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="ft-inner">
          <div className="ft-top">
            <div className="ft-brand">
              <a className="nav-logo" href="#">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <polygon points="10,2 18,18 2,18" stroke="#C2603F" strokeWidth="1.5" fill="rgba(194,96,63,0.1)" />
                  <polygon points="10,7 15,16 5,16" fill="rgba(194,96,63,0.18)" />
                </svg>
                Triad Labs
              </a>
              <p className="ft-desc">An AI-native venture studio. We build and launch useful products — idea to MVP in days. triadlabs.ai</p>
            </div>
            <div className="ft-col">
              <span className="ft-col-head">Studio</span>
              <ul>
                <li><a href="#why">Why a studio</a></li>
                <li><a href="#how">How we build</a></li>
                <li><a href="#zodus">Now building Zodus</a></li>
              </ul>
            </div>
            <div className="ft-col">
              <span className="ft-col-head">Company</span>
              <ul>
                <li><a href="#story">Our story</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="ft-col">
              <span className="ft-col-head">Contact</span>
              <ul>
                <li><a href="mailto:founders@triadlabs.ai">founders@triadlabs.ai</a></li>
                <li><a href="https://zodus.ai/" target="_blank" rel="noopener noreferrer">Zodus ↗</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="ft-bottom">
            <span>© 2026 Triad Labs</span>
            <span>triadlabs.ai</span>
          </div>
        </div>
      </footer>
    </>
  );
}
