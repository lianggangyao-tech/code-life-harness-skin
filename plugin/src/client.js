window.__ModuleLoader__.load({
	id: "dsh-skin-code-life",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		const React = require("react");
		const h = React.createElement;

		// ---------- 三套皮肤的 token（只改颜色和字体，布局完全交给 Harness） ----------
		// VIS：品牌黑 #171717 / 柔白 #F4F4F2 / 青柠 #D7FF4F；青柠上不放白字，浅底不用青柠写字。
		const TEXT_FONT = 'Arial, "Heiti SC", "PingFang SC", "Noto Sans SC", sans-serif';
		const CODE_FONT = '"M PLUS 1 Code", "SF Mono", ui-monospace, Menlo, monospace';
		const SKINS = [
			{
				id: "cl-night",
				name: "夜 · Lime Night",
				desc: "纯黑做底，青柠是唯一的光。",
				colorScheme: "dark",
				preview: { bg: "#171717", side: "#222222", dot: "#d7ff4f", line: "#f4f4f2" },
				rain: { color: "#d7ff4f", alpha: 0.22 },
				page: "#171717",
				tokens: {
					"--dsw-alias-bg-base": "rgba(23,23,23,.88)",
					"--dsw-alias-bg-layer-1": "#1d1d1d",
					"--dsw-alias-bg-layer-2": "#232323",
					"--dsw-alias-bg-layer-3": "#2a2a2a",
					"--dsw-alias-bg-overlay": "rgba(8,8,8,.62)",
					"--dsw-alias-border-l1": "rgba(244,244,242,.08)",
					"--dsw-alias-border-l2": "rgba(244,244,242,.12)",
					"--dsw-alias-border-l3": "rgba(244,244,242,.16)",
					"--dsw-alias-brand-primary": "#d7ff4f",
					"--dsw-alias-brand-text": "#d7ff4f",
					"--dsw-alias-label-primary": "#f4f4f2",
					"--dsw-alias-label-secondary": "#a5a5a1",
					"--dsw-alias-label-tertiary": "#6c6c69",
					"--dsw-alias-label-caption": "#8a8a86",
					"--dsw-alias-label-primary-inverted": "#171717",
					"--dsw-alias-label-deep-diving": "#d7ff4f",
					"--dsw-alias-state-business-primary": "#d7ff4f",
					"--dsw-alias-state-success-primary": "#b9d98f",
					"--dsw-alias-state-error-primary": "#e39a92",
					"--dsw-alias-state-warn-primary": "#e8c37a",
					"--dsw-alias-state-idle-primary": "#6c6c69",
					"--dsw-alias-button-primary-fill": "#f4f4f2",
					"--dsw-alias-button-primary-hover": "#ffffff",
					"--dsw-alias-interactive-bg-hover": "rgba(244,244,242,.06)",
					"--dsw-alias-interactive-bg-active": "rgba(244,244,242,.10)",
					"--dsw-alias-toast-bg": "#f4f4f2",
					"--dsw-alias-toast-label": "#171717",
					"--dsw-alias-settings-card-fill": "rgba(244,244,242,.04)",
					"--dsw-specific-sidebar-fill": "rgba(16,16,16,.80)",
					"--dsw-specific-sidebar-nav-item-active": "rgba(244,244,242,.10)",
					"--dsw-specific-sidebar-nav-item-active-accent": "#d7ff4f",
					"--dsh-font-family-text": TEXT_FONT,
					"--dsh-font-family-code": CODE_FONT
				}
			},
			{
				id: "cl-day",
				name: "日 · Paper Day",
				desc: "柔白做底，黑色表示选中。",
				colorScheme: "light",
				preview: { bg: "#f4f4f2", side: "#e8e8e6", dot: "#d7ff4f", line: "#171717" },
				rain: { color: "#171717", alpha: 0.08 },
				page: "#f4f4f2",
				tokens: {
					"--dsw-alias-bg-base": "rgba(244,244,242,.92)",
					"--dsw-alias-bg-layer-1": "#ffffff",
					"--dsw-alias-bg-layer-2": "#fafaf8",
					"--dsw-alias-bg-layer-3": "#ececea",
					"--dsw-alias-border-l1": "rgba(23,23,23,.08)",
					"--dsw-alias-border-l2": "rgba(23,23,23,.12)",
					"--dsw-alias-border-l3": "rgba(23,23,23,.16)",
					"--dsw-alias-brand-primary": "#171717",
					"--dsw-alias-brand-text": "#171717",
					"--dsw-alias-label-primary": "#171717",
					"--dsw-alias-label-secondary": "#5f5f5c",
					"--dsw-alias-label-tertiary": "#9a9a96",
					"--dsw-alias-label-caption": "#7a7a76",
					"--dsw-alias-label-primary-inverted": "#f4f4f2",
					"--dsw-alias-label-deep-diving": "#171717",
					"--dsw-alias-state-business-primary": "#171717",
					"--dsw-alias-state-success-primary": "#3f7a2a",
					"--dsw-alias-state-error-primary": "#b0443a",
					"--dsw-alias-state-warn-primary": "#a8741a",
					"--dsw-alias-button-primary-fill": "#171717",
					"--dsw-alias-button-primary-hover": "#000000",
					"--dsw-alias-interactive-bg-hover": "rgba(23,23,23,.05)",
					"--dsw-alias-interactive-bg-active": "rgba(23,23,23,.08)",
					"--dsw-alias-toast-bg": "#171717",
					"--dsw-alias-toast-label": "#f4f4f2",
					"--dsw-specific-sidebar-fill": "rgba(236,236,234,.88)",
					"--dsw-specific-sidebar-nav-item-active": "rgba(23,23,23,.08)",
					"--dsw-specific-sidebar-nav-item-active-accent": "#171717",
					"--dsh-font-family-text": TEXT_FONT,
					"--dsh-font-family-code": CODE_FONT
				}
			},
			{
				id: "cl-deep",
				name: "深空 · Deep Space",
				desc: "带蓝调的黑，蓝橙两道光。",
				colorScheme: "dark",
				preview: { bg: "#090b10", side: "#151924", dot: "#5b7cff", line: "#ff8a3d" },
				rain: { color: "#5b7cff", alpha: 0.2 },
				page: "#090b10",
				tokens: {
					"--dsw-alias-bg-base": "rgba(9,11,16,.88)",
					"--dsw-alias-bg-layer-1": "#11141c",
					"--dsw-alias-bg-layer-2": "#171b25",
					"--dsw-alias-bg-layer-3": "#1e2330",
					"--dsw-alias-border-l1": "rgba(220,228,255,.08)",
					"--dsw-alias-border-l2": "rgba(220,228,255,.12)",
					"--dsw-alias-border-l3": "rgba(220,228,255,.16)",
					"--dsw-alias-brand-primary": "#5b7cff",
					"--dsw-alias-label-primary": "#e9ecf2",
					"--dsw-alias-label-secondary": "#8c94a5",
					"--dsw-alias-label-tertiary": "#596071",
					"--dsw-alias-label-deep-diving": "#ff8a3d",
					"--dsw-alias-state-business-primary": "#5b7cff",
					"--dsw-alias-state-success-primary": "#5fd38d",
					"--dsw-alias-state-error-primary": "#ff7a7a",
					"--dsw-alias-state-warn-primary": "#ff8a3d",
					"--dsw-alias-interactive-bg-hover": "rgba(255,255,255,.05)",
					"--dsw-alias-interactive-bg-active": "rgba(255,255,255,.08)",
					"--dsw-specific-sidebar-fill": "rgba(14,17,25,.80)",
					"--dsw-specific-sidebar-nav-item-active": "rgba(255,255,255,.08)",
					"--dsw-specific-sidebar-nav-item-active-accent": "#ff8a3d",
					"--dsh-font-family-code": CODE_FONT
				}
			}
		];
		const SKIN_IDS = SKINS.map((s) => s.id);
		const PANEL_ID = "cl-skins";
		const KEY = "code-life:state";

		// ---------- 小状态仓库：选中的皮肤、代码雨、动效 ----------
		function readSaved() {
			try {
				const v = JSON.parse(localStorage.getItem(KEY) || "{}");
				return { skin: SKIN_IDS.includes(v.skin) ? v.skin : "", rain: v.rain !== false, motion: v.motion !== false, layout: v.layout === "official" ? "official" : "life", displayName: typeof v.displayName === "string" ? v.displayName.slice(0, 16) : "" };
			} catch (e) {
				return { skin: "", rain: true, motion: true, layout: "life", displayName: "" };
			}
		}
		function createStore() {
			let state = readSaved();
			const listeners = new Set();
			return {
				get: () => state,
				set(patch) {
					state = Object.assign({}, state, patch);
					try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
					listeners.forEach((l) => l());
				},
				subscribe(l) { listeners.add(l); return () => listeners.delete(l); }
			};
		}

		// ---------- 全局样式：让代码雨从半透明底色后面透出来 ----------
		const CSS = `
html[data-cl-skin]{background:var(--cl-page)}
html[data-cl-skin] body{background:transparent!important}
#cl-rain{position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:-1;display:block}
.cl-skin-page{box-sizing:border-box;height:100%;overflow:auto;padding:40px 48px;color:var(--dsw-alias-label-primary);font-family:var(--dsw-font-family,inherit)}
.cl-skin-page h1{margin:0 0 6px;font-size:22px;font-weight:600}
.cl-skin-page .sub{margin:0 0 28px;color:var(--dsw-alias-label-secondary);font-size:13px;max-width:60ch;line-height:1.6}
.cl-skin-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;max-width:760px}
.cl-skin-card{all:unset;box-sizing:border-box;cursor:pointer;display:grid;gap:10px;padding:12px;border-radius:18px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-settings-card-fill,transparent)}
.cl-skin-card:hover{border-color:var(--dsw-alias-border-l3)}
.cl-skin-card:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:2px}
.cl-skin-card[aria-pressed="true"]{border-color:var(--dsw-alias-label-primary)}
.cl-skin-prev{position:relative;height:96px;border-radius:12px;overflow:hidden;display:grid;grid-template-columns:30% 1fr;gap:6px;padding:8px;box-sizing:border-box}
.cl-skin-prev i{border-radius:6px;display:block}
.cl-skin-prev b{position:absolute;right:10px;bottom:10px;width:14px;height:14px;border-radius:50%}
.cl-skin-prev em{position:absolute;left:38%;top:16px;height:3px;width:40%;border-radius:2px;opacity:.6}
.cl-skin-prev em+em{top:26px;width:28%}
.cl-skin-name{font-size:14px;font-weight:600;display:flex;justify-content:space-between;align-items:center}
.cl-skin-name small{font-size:11px;font-weight:400;color:var(--dsw-alias-label-secondary)}
.cl-skin-desc{font-size:12px;color:var(--dsw-alias-label-secondary)}
.cl-skin-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:28px;max-width:760px}
.cl-skin-tog{all:unset;cursor:pointer;font-size:13px;padding:7px 14px;border-radius:999px;border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary);display:flex;gap:8px;align-items:center}
.cl-skin-tog::before{content:"";width:7px;height:7px;border-radius:50%;border:1px solid currentColor}
.cl-skin-tog[aria-pressed="true"]{color:var(--dsw-alias-label-primary)}
.cl-skin-tog[aria-pressed="true"]::before{background:var(--dsw-alias-brand-primary);border-color:var(--dsw-alias-brand-primary)}
.cl-skin-tog:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:2px}
.cl-skin-input{all:unset;box-sizing:border-box;width:240px;font-size:13px;padding:7px 14px;border-radius:999px;border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary)}
.cl-skin-input:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:2px}
.cl-skin-h2{margin:36px 0 0;font-size:15px;font-weight:600}
.cl-skin-note{margin-top:20px;font-size:12px;color:var(--dsw-alias-label-tertiary);max-width:60ch;line-height:1.6}
/* ===== 代码人生外框 ===== */
.jf{--jf-glass:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 38%,transparent);--jf-line:var(--dsw-alias-border-l1);--jf-fg:var(--dsw-alias-label-primary);--jf-mute:var(--dsw-alias-label-secondary);--jf-faint:var(--dsw-alias-label-tertiary);--jf-accent:var(--dsw-alias-brand-primary);--jf-active:var(--dsw-alias-interactive-bg-active);--jf-r:22px;
  position:fixed;inset:0;display:flex;flex-direction:column;color:var(--jf-fg);font-family:var(--dsw-font-family,inherit);font-size:13px;overflow:hidden;background:transparent}
.jf-env{position:absolute;inset:0;pointer-events:none;z-index:0;overflow:hidden}
.jf-orb{position:absolute;right:12%;bottom:-120px;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--jf-accent) 45%,transparent),transparent 70%);filter:blur(8px)}
.jf-arc{position:absolute;left:-80px;bottom:-180px;width:640px;height:auto}
.jf-arc path{stroke:color-mix(in srgb,var(--jf-fg) 5%,transparent)}
.jf>*:not(.jf-env){position:relative;z-index:1}
.jf-top{height:40px;flex:none;display:flex;align-items:center;justify-content:center;color:var(--jf-fg);font-size:13px;font-weight:500;letter-spacing:.04em;position:relative;z-index:2;text-shadow:0 0 6px var(--dsw-alias-bg-layer-1),0 0 2px var(--dsw-alias-bg-layer-1)}
.jf-grid{flex:1;min-height:0;display:grid;grid-template-columns:56px 248px minmax(0,1fr) 264px;gap:12px;padding:0 12px 12px}
.jf-pane{background:var(--jf-glass);border:1px solid var(--jf-line);border-radius:var(--jf-r);backdrop-filter:blur(26px) saturate(130%);-webkit-backdrop-filter:blur(26px) saturate(130%);box-shadow:inset 0 1px 0 rgba(255,255,255,.06),0 24px 48px -28px rgba(0,0,0,.5);min-width:0;min-height:0}
.jf-rail{display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 0;border-radius:999px}
.jf-jchip{width:40px;height:40px;border-radius:50%;background:#171717;box-shadow:inset 0 0 0 1px rgba(244,244,242,.14);display:grid;place-items:center;margin-bottom:14px;border:0;cursor:pointer;padding:0}
.jf-jchip img{width:22px;height:auto;display:block}
.jf-ic{all:unset;box-sizing:border-box;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;color:var(--jf-mute);cursor:pointer;position:relative}
.jf-ic:hover{color:var(--jf-fg);background:var(--dsw-alias-interactive-bg-hover)}
.jf-ic[aria-current="page"]{background:var(--jf-active);color:var(--jf-fg)}
.jf-ic:focus-visible,.jf-sess:focus-visible,.jf-new:focus-visible,.jf-jchip:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:2px}
.jf-avatar img{width:30px;height:30px;border-radius:50%;object-fit:cover;display:block}
.jf-ic svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.jf-ic .jf-glyph{font-size:12px;font-weight:600}
.jf-sp{flex:1}
.jf-side{display:flex;flex-direction:column;padding:18px 10px 12px;gap:2px;overflow:hidden}
.jf-brand{padding:4px 12px 20px}
.jf-word{font-size:20px;font-weight:700;letter-spacing:.02em;display:block}
.jf-word{font-size:22px;letter-spacing:.12em}
.jf-word::after{content:"";display:inline-block;width:.5em;height:.18em;background:var(--jf-accent);margin-left:.15em;vertical-align:-.05em;animation:jf-blink 1s steps(1) infinite}
@keyframes jf-blink{50%{opacity:0}}
html.jf-still .jf-word::after{animation:none}
.jf-hd{display:flex;justify-content:space-between;align-items:center;padding:0 12px 8px}
.jf-hd b{font-size:14px;font-weight:600}
.jf-new{all:unset;cursor:pointer;font-size:12px;border:1px solid var(--jf-line);border-radius:999px;padding:3px 12px;color:var(--jf-fg)}
.jf-new:hover{background:var(--dsw-alias-interactive-bg-hover)}
.jf-list{flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:2px}
.jf-grp{font-size:10px;letter-spacing:.14em;color:var(--jf-faint);padding:12px 12px 4px;text-transform:uppercase}
.jf-sess{all:unset;box-sizing:border-box;cursor:pointer;display:grid;grid-template-columns:8px minmax(0,1fr) auto;gap:10px;align-items:center;padding:8px 12px;border-radius:999px;color:var(--jf-mute)}
.jf-sess:hover{background:var(--dsw-alias-interactive-bg-hover)}
.jf-sess[aria-current="true"]{background:var(--jf-active);color:var(--jf-fg)}
.jf-row{position:relative}
.jf-row .jf-more{all:unset;position:absolute;right:8px;top:50%;transform:translateY(-50%);width:26px;height:26px;border-radius:50%;display:grid;place-items:center;cursor:pointer;color:var(--jf-mute);opacity:0}
.jf-row:hover .jf-more,.jf-row .jf-more:focus-visible,.jf-row .jf-more[aria-expanded="true"]{opacity:1}
.jf-row:hover .jf-sess .n,.jf-row:focus-within .jf-sess .n{visibility:hidden}
.jf-row .jf-more:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--jf-fg)}
.jf-row .jf-more:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary)}
.jf-sess .pin{font-size:10px;color:var(--jf-accent);margin-left:4px}
.jf-arch{all:unset;cursor:pointer;display:flex;justify-content:space-between;align-items:center;padding:10px 12px 4px;font-size:11px;letter-spacing:.08em;color:var(--jf-faint)}
.jf-arch:hover{color:var(--jf-mute)}
.jf-row.archived .jf-sess{opacity:.6}
.jf-menu{position:fixed;z-index:1000;min-width:184px;max-width:280px;padding:6px;border-radius:14px;background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 94%,transparent);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid var(--jf-line);box-shadow:0 14px 36px rgba(0,0,0,.35);display:grid;gap:2px;font-size:13px;color:var(--jf-fg)}
.jf-menu .mt{padding:6px 10px 4px;font-size:11px;color:var(--jf-faint);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.jf-menu button{all:unset;cursor:pointer;padding:7px 10px;border-radius:9px;display:flex;justify-content:space-between;gap:12px}
.jf-menu button:hover,.jf-menu button:focus-visible{background:var(--dsw-alias-interactive-bg-hover)}
.jf-menu button.warn{color:#ff7a59}
.jf-menu .sep{height:1px;margin:3px 6px;background:var(--jf-line)}
.jf-menu input{all:unset;box-sizing:border-box;width:100%;padding:7px 10px;border-radius:9px;border:1px solid var(--jf-line);background:color-mix(in srgb,var(--jf-fg) 5%,transparent)}
.jf-menu input:focus{border-color:var(--jf-accent)}
.jf-menu .row{display:flex;gap:6px;justify-content:flex-end;padding-top:4px}
.jf-menu .row button{padding:5px 12px;border:1px solid var(--jf-line)}
.jf-menu .msg{padding:6px 10px;font-size:12px;color:var(--jf-mute);line-height:1.5}
.jf-menu .err{padding:4px 10px;font-size:12px;color:#ff7a59}
.jf-sess .t{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.jf-sess .n,.jf-mono{font-family:var(--ds-font-family-code,monospace);font-size:11px;color:var(--jf-faint)}
.jf-dot{width:7px;height:7px;border-radius:50%;border:1px solid var(--jf-faint)}
.jf-dot.run{background:var(--jf-accent);border-color:var(--jf-accent);box-shadow:0 0 10px var(--jf-accent)}
.jf-empty{padding:16px 12px;color:var(--jf-faint);font-size:12px;line-height:1.6}
.jf-main{position:relative;overflow:hidden;display:flex;flex-direction:column}
.jf-main>.jf-mainin{flex:1;min-height:0;position:relative;display:flex;flex-direction:column}
.jf-hud{padding:18px;display:flex;flex-direction:column;gap:14px;overflow:auto}
.jf-k{font-size:10px;letter-spacing:.14em;color:var(--jf-faint);text-transform:uppercase;display:flex;justify-content:space-between}
.jf-clock{font-size:34px;font-weight:700;font-variant-numeric:tabular-nums;letter-spacing:-.02em;line-height:1}
.jf-gauge{display:grid;place-items:center;position:relative}
.jf-gauge svg{width:150px;height:150px}
.jf-gauge .c{position:absolute;text-align:center}
.jf-gauge .big{font-size:28px;font-weight:700;font-variant-numeric:tabular-nums}
.jf-stats{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.jf-stat{padding:10px 12px;border-radius:14px;border:1px solid var(--jf-line);background:color-mix(in srgb,var(--jf-fg) 3%,transparent)}
.jf-stat .v{font-size:18px;font-weight:700;font-variant-numeric:tabular-nums}
.jf-stat .l{font-size:11px;color:var(--jf-mute)}
.jf-cur{display:grid;gap:4px;padding:12px;border-radius:14px;border:1px solid var(--jf-line)}
.jf-cur b{font-size:13px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.jf-tl{list-style:none;margin:0;padding:0 0 0 14px;position:relative;display:grid}
.jf-tl::before{content:"";position:absolute;left:3px;top:8px;bottom:8px;width:1px;background:var(--jf-line)}
.jf-tl li{display:grid;grid-template-columns:44px minmax(0,1fr);gap:6px;font-size:12px;color:var(--jf-mute);padding:3px 0;position:relative}
.jf-tl li span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.jf-tl li::before{content:"";position:absolute;left:-14px;top:9px;width:7px;height:7px;border-radius:50%;border:1px solid var(--jf-faint);background:var(--dsw-alias-bg-base)}
.jf-tl li.run{color:var(--jf-fg)}
.jf-tl li.run::before{background:var(--jf-accent);border-color:var(--jf-accent)}
.jf-rightbar{position:absolute;top:40px;right:0;bottom:0;width:0;z-index:5}
.jf-bottom{flex:none}
.jf-overlay{position:absolute;inset:0;pointer-events:none;z-index:20}
.jf-overlay>*{pointer-events:auto}

/* 会话栏底部：皮肤 */
.jf-skins{border-top:1px solid var(--jf-line);padding-top:6px;margin-top:6px;display:grid;gap:8px}
.jf-tiles{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;padding:0 4px}
.jf-tile{all:unset;box-sizing:border-box;cursor:pointer;display:grid;justify-items:center;gap:6px;padding:8px 4px;border-radius:16px;border:1px solid transparent;color:var(--jf-mute);font-size:11.5px;white-space:nowrap}
.jf-tile:hover{border-color:var(--jf-line)}
.jf-tile:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:2px}
.jf-tile[aria-pressed="true"]{background:var(--jf-active);color:var(--jf-fg);border-color:var(--jf-line)}
.jf-tile .sw{position:relative;width:100%;max-width:56px;height:30px;border-radius:10px;border:1px solid rgba(128,128,128,.35)}
.jf-tile .sw i{position:absolute;right:6px;bottom:6px;width:8px;height:8px;border-radius:50%}
.jf-togs{display:flex;gap:4px;padding:0 4px}
.jf-togs .cl-skin-tog{padding:5px 12px;font-size:12px}
.jf-gauge .big small{font-size:15px;font-weight:400}
.jf-stats{grid-template-columns:1fr 1fr}
.jf-stat .v{font-size:16px}
/* 看不见的官方侧栏：只为了让设置、账户等弹窗能工作 */
.jf>.jf-ghost{position:fixed;left:-10000px;top:0;width:280px;height:100vh;overflow:hidden;z-index:0}

/* ===== 中间对话区：按原型改样式（类名前缀对应 Harness 0.2.1-rc.3） ===== */
/* 顶栏：半实底+模糊挡住代码雨，文字用主色并加暗描边，保证看得清 */
.jf-main [class~="kiGsTW_header"]{background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 82%,transparent)!important;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--jf-line)!important;position:relative;z-index:2}
.jf-main [class~="kiGsTW_header"] *{color:var(--jf-fg)!important;opacity:1!important}
.jf-main [class~="kiGsTW_crumbCurrent"]{font-weight:600!important;font-size:16px!important;color:var(--jf-fg)!important;text-shadow:0 0 6px var(--dsw-alias-bg-layer-1),0 0 2px var(--dsw-alias-bg-layer-1)}
.jf-main [class~="kiGsTW_tab"]{color:var(--jf-fg)!important;font-weight:500!important}
.jf-main [class~="kiGsTW_headerActions"] > [class~="nIjNjW_label"],.jf-main [class~="ufIuna_seat"],.jf-main [class~="_8tPydW_workspace"]{border:1px solid var(--jf-line)!important;border-radius:999px!important;padding:3px 12px!important;background:color-mix(in srgb,var(--jf-fg) 4%,transparent)!important;font-size:11.5px!important;color:var(--jf-mute)!important}
.jf-main .jf-livepill{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--jf-line);border-radius:999px;padding:3px 12px;font-size:11.5px;color:var(--jf-fg);background:color-mix(in srgb,var(--jf-accent) 8%,transparent);margin-left:8px}
.jf-main .jf-livepill::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--jf-accent);box-shadow:0 0 8px var(--jf-accent)}
.jf-main [class~="kiGsTW_tab"]{border-radius:999px!important;padding:2px 12px!important;font-size:12px!important}
.jf-main [class~="kiGsTW_tabActive"]{background:var(--jf-active)!important;color:var(--jf-fg)!important;box-shadow:none!important}
.jf-main [class~="kiGsTW_tabActive"]::after{display:none!important}
/* 用户气泡 */
.jf-main [class~="AkCqbG_bubble"]{border-radius:20px 20px 6px 20px!important;background:var(--jf-active)!important;border:1px solid var(--jf-line)!important;padding:10px 16px!important;color:var(--jf-fg)!important}
/* 过程行（已完成，用时…）做成原型的工具卡 */
.jf-main [class~="gTO55a_root"]{display:inline-flex!important;align-items:center;gap:8px;border:1px solid var(--jf-line);border-radius:16px;padding:6px 14px!important;background:color-mix(in srgb,var(--jf-fg) 4%,transparent);font-family:var(--ds-font-family-code,monospace)!important;font-size:11.5px!important;color:var(--jf-mute)!important}
.jf-main [class~="gTO55a_root"]::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--dsw-alias-state-success-primary,var(--jf-fg));flex:none}
.jf-main [class~="UHhYua_root"]{border:1px solid var(--jf-line)!important;border-radius:16px!important;background:color-mix(in srgb,var(--jf-fg) 4%,transparent)!important}
.jf-main [class~="UHhYua_title"],.jf-main [class~="UHhYua_summary"],.jf-main [class~="UHhYua_codeBody"],.jf-main [class~="UHhYua_diffBody"],.jf-main [class~="UHhYua_terminalBody"]{font-family:var(--ds-font-family-code,monospace)!important}
.jf-main [class~="UHhYua_diffAdded"]{color:var(--dsw-alias-state-success-primary)!important}
.jf-main [class~="UHhYua_diffRemoved"]{color:var(--dsw-alias-state-error-primary)!important}
.jf-main [class~="ijfCxa_root"]{color:var(--jf-mute)}
.jf-main [class~="ZITbJG_actions"],.jf-main [class~="ZITbJG_endInfo"]{font-family:var(--ds-font-family-code,monospace);color:var(--jf-faint)!important}
/* 思考中：用翻滚的片假名代替官方的小鲸鱼 */
.jf-main [class~="tnXGgG_runningWhaleAnimated"],.jf-main [class~="tnXGgG_runningWhaleStill"]{display:none!important}
/* 运行中照原型：前面一串跳动乱码，后面是状态文字（出现/变化时先乱码再逐字解码）；官方扫光文字藏起来，由我们的副本代替 */
.jf-main [class~="tnXGgG_runningText"]{display:none!important}
.jf-main [class~="tnXGgG_runningIcon"]{display:none!important}
.jf-main .jf-run{display:inline-flex;align-items:center;gap:12px}
.jf-main .jf-runtxt{font-size:12.5px;color:var(--jf-mute);white-space:nowrap;letter-spacing:.02em}
.jf-main .jf-runtxt i{font-style:normal;font-family:var(--ds-font-family-code,monospace);color:var(--jf-accent)}
html[data-cl-skin="cl-day"] .jf-main .jf-runtxt i{color:var(--jf-fg)}
.jf-main .jf-scr{font-family:var(--ds-font-family-code,monospace);font-size:12px;letter-spacing:.08em;color:var(--jf-accent);white-space:pre;min-width:11ch}
html[data-cl-skin="cl-day"] .jf-main .jf-scr{color:var(--jf-fg)}
/* 输入框：玻璃卡片＋右侧青柠光＋胶囊按钮＋青柠发送键 */
.jf-main [class~="JZLxKW_card"]{border-radius:24px!important;background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 62%,transparent)!important;backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid var(--jf-line)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.06),0 0 0 1px color-mix(in srgb,var(--jf-glow,var(--jf-accent)) 10%,transparent),36px 14px 130px -34px color-mix(in srgb,var(--jf-glow,var(--jf-accent)) 50%,transparent),8px 0 60px -24px color-mix(in srgb,var(--jf-glow,var(--jf-accent)) 22%,transparent)!important}
.jf-main [class~="JZLxKW_card"] button:not([class~="JZLxKW_primary"]){border-radius:999px!important}
.jf-main [class~="JZLxKW_modes"] button,.jf-main [class~="JZLxKW_standardControls"] button,.jf-main [class~="JZLxKW_add"]{border:1px solid var(--jf-line)!important;background:color-mix(in srgb,var(--jf-fg) 4%,transparent)!important;font-size:12px!important}
.jf-main [class~="JZLxKW_primary"]{width:36px!important;height:36px!important;min-width:36px!important;border-radius:50%!important;background:var(--jf-send,#d7ff4f)!important;color:var(--jf-send-fg,#171717)!important;border:0!important;opacity:1!important}
.jf-main [class~="JZLxKW_primary"]:disabled,.jf-main [class~="JZLxKW_primary"][aria-disabled="true"]{opacity:.45!important}
.jf-main [class~="JZLxKW_primary"] svg{color:var(--jf-send-fg,#171717)!important;fill:currentColor}
.jf-main [class~="JZLxKW_placeholder"]{visibility:hidden}
.jf-main [class~="JZLxKW_placeholder"]::after{content:"继续说，或输入 / 调出命令…";visibility:visible;color:var(--jf-faint);position:absolute;left:0;top:0;white-space:nowrap}
.jf-main [class~="kiGsTW_composerHero"] [class~="JZLxKW_placeholder"]::after{content:"嗨，今天想让我做什么？";display:inline-block;overflow:hidden;width:15em;border-right:.55em solid var(--jf-accent);animation:jf-type 1.8s steps(15,end) .2s both,jf-caret 1s steps(1) 2s infinite}
@keyframes jf-type{from{width:0}}
@keyframes jf-caret{50%{border-right-color:transparent}}
.jf-main [class~="JZLxKW_dock"]{display:none!important}
.jf-main [class~="JZLxKW_input"],.jf-main [class~="JZLxKW_input"] *{caret-color:var(--jf-accent);caret-shape:block}
.jh-input{caret-color:var(--jf-accent);caret-shape:block}
/* 空白首屏 */
.jf-main [class~="_8tPydW_titleGroup"]{font-size:0!important}
.jf-main [class~="_8tPydW_titleGroup"] *{display:none!important}
.jf-main [class~="_8tPydW_titleGroup"]::before{content:"Hello, World.";font-size:24px;font-weight:600;color:var(--jf-fg);letter-spacing:.02em}
.jf-main [class~="_8tPydW_fishHitbox"] svg{display:none!important}
.jf-main [class~="_8tPydW_fishHitbox"]{width:40px;height:40px;border-radius:50%;background:#171717 var(--jf-jrev) center/22px auto no-repeat;box-shadow:inset 0 0 0 1px rgba(244,244,242,.14);display:inline-block}
/* 发送键颜色：夜/日用青柠，深空用蓝橙渐变 */
html[data-cl-skin="cl-deep"] .jf{--jf-send:linear-gradient(135deg,#ff8a3d,#5b7cff);--jf-send-fg:#fff;--jf-glow:#5b7cff}
@media (prefers-reduced-motion:reduce){.jf-main [class~="kiGsTW_composerHero"] [class~="JZLxKW_placeholder"]::after{animation:none}}
html.jf-still .jf-main [class~="kiGsTW_composerHero"] [class~="JZLxKW_placeholder"]::after{animation:none}


/* ===== 主页 ===== */
.jh{box-sizing:border-box;height:100%;overflow:auto;padding:56px 40px 40px;color:var(--jf-fg,var(--dsw-alias-label-primary));font-family:var(--dsw-font-family,inherit)}
.jh-in{max-width:760px;margin:0 auto;display:grid;gap:28px}
.jh-hero{display:grid;justify-items:center;gap:18px;padding-top:6vh}
.jh-hi{display:flex;align-items:center;gap:14px;font-size:32px;font-weight:600;letter-spacing:.02em;text-wrap:balance;text-align:center}
.jh-hi img{width:44px;height:44px;border-radius:50%;background:#171717;padding:10px;box-sizing:border-box;box-shadow:inset 0 0 0 1px rgba(244,244,242,.14)}
.jh-sub{margin:0;color:var(--dsw-alias-label-secondary);font-size:15px;text-align:center;max-width:44ch;line-height:1.6}
.jh-box{width:100%;box-sizing:border-box;border-radius:24px;border:1px solid var(--dsw-alias-border-l2);background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 55%,transparent);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);padding:14px 16px 10px;display:grid;gap:8px;box-shadow:0 0 0 1px color-mix(in srgb,var(--jf-glow,var(--dsw-alias-brand-primary)) 10%,transparent),36px 14px 130px -34px color-mix(in srgb,var(--jf-glow,var(--dsw-alias-brand-primary)) 45%,transparent)}
.jh-input{all:unset;box-sizing:border-box;width:100%;min-height:52px;font-size:15px;line-height:1.6;white-space:pre-wrap;color:var(--jf-fg,var(--dsw-alias-label-primary))}
.jh-input::placeholder{color:var(--dsw-alias-label-tertiary)}
.jh-row{display:flex;align-items:center;gap:8px}
.jh-row .sp{flex:1}
.jh-chip{all:unset;cursor:pointer;font-size:12px;padding:4px 12px;border-radius:999px;border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary);white-space:nowrap}
.jh-chip:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l3)}
.jh-chip:focus-visible,.jh-send:focus-visible,.jh-item:focus-visible,.jh-card:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:2px}
.jh-send{all:unset;cursor:pointer;width:36px;height:36px;border-radius:50%;display:grid;place-items:center;background:var(--jf-send,#d7ff4f);color:var(--jf-send-fg,#171717)}
.jh-send[aria-disabled="true"]{opacity:.45;cursor:default}
.jh-send svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
.jh-meta{display:flex;justify-content:space-between;align-items:center;width:100%;font-size:12px;color:var(--dsw-alias-label-tertiary);padding:0 6px}
.jh-sec{display:grid;gap:10px}
.jh-k{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--dsw-alias-label-tertiary);display:flex;justify-content:space-between;align-items:center}
.jh-list{display:grid;gap:8px}
.jh-item{all:unset;box-sizing:border-box;display:grid;grid-template-columns:10px minmax(0,1fr) auto;gap:12px;align-items:center;padding:12px 16px;border-radius:18px;border:1px solid var(--dsw-alias-border-l1);background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 34%,transparent);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
button.jh-item{cursor:pointer}
button.jh-item:hover{border-color:var(--dsw-alias-border-l3)}
.jh-item b{font-size:14px;font-weight:600;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.jh-item span.s{font-size:12.5px;color:var(--dsw-alias-label-secondary);display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.jh-item .go{font-size:12px;color:var(--dsw-alias-label-tertiary);white-space:nowrap}
.jh-dot{width:8px;height:8px;border-radius:50%;border:1px solid var(--dsw-alias-label-tertiary)}
.jh-dot.run{background:var(--dsw-alias-brand-primary);border-color:var(--dsw-alias-brand-primary);box-shadow:0 0 10px var(--dsw-alias-brand-primary)}
.jh-dot.warn{background:var(--dsw-alias-state-warn-primary);border-color:var(--dsw-alias-state-warn-primary)}
.jh-dot.done{background:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-primary)}
.jh-recs{display:flex;flex-wrap:wrap;gap:8px}
.jh-recs .jh-chip{font-size:13px;padding:7px 14px;background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 30%,transparent)}
.jh-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.jh-card{all:unset;box-sizing:border-box;cursor:pointer;display:grid;gap:6px;padding:14px;border-radius:18px;border:1px solid var(--dsw-alias-border-l1);background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 34%,transparent);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);min-width:0}
.jh-card:hover{border-color:var(--dsw-alias-border-l3)}
.jh-card b{font-size:13.5px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.jh-card span{font-size:12px;color:var(--dsw-alias-label-tertiary);font-family:var(--ds-font-family-code,monospace)}
.jh details{border-top:1px solid var(--dsw-alias-border-l1);padding-top:14px}
.jh summary{cursor:pointer;font-size:13px;color:var(--dsw-alias-label-secondary);list-style:none;display:flex;justify-content:space-between}
.jh summary::-webkit-details-marker{display:none}
.jh summary:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:4px}
.jh-grid2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:12px}
.jh-mini{padding:10px 14px;border-radius:14px;border:1px solid var(--dsw-alias-border-l1);font-size:12.5px;color:var(--dsw-alias-label-secondary);display:grid;gap:3px;min-width:0}
.jh-mini b{color:var(--dsw-alias-label-primary);font-size:13px}
.jh-foot{font-size:11.5px;color:var(--dsw-alias-label-tertiary);text-align:center}
@media (max-width:900px){.jh{padding:32px 20px}.jh-cards{grid-template-columns:1fr 1fr}.jh-grid2{grid-template-columns:1fr}}

@media (max-width:1180px){.jf-grid{grid-template-columns:56px 248px minmax(0,1fr)}.jf-hud{display:none}}
@media (max-width:860px){.jf-grid{grid-template-columns:56px minmax(0,1fr)}.jf-side{display:none}}
@media (prefers-reduced-motion:reduce){.jf *{transition:none!important}}
`;

		// ---------- 代码雨 ----------
		const KANA = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾜﾝ0123456789:=*+<>";
		const rg = () => KANA.charAt((Math.random() * KANA.length) | 0);
		function createRain() {
			let cv = null, ctx2 = null, cols = [], W = 0, H = 0, raf = 0, last = 0, color = "#d7ff4f", alpha = 0.2;
			const fs = 14;
			function size() {
				const d = window.devicePixelRatio || 1;
				W = innerWidth; H = innerHeight; cv.width = W * d; cv.height = H * d; ctx2.setTransform(d, 0, 0, d, 0, 0);
				cols = [];
				for (let i = 0; i < Math.ceil(W / fs); i++) {
					const len = 6 + ((Math.random() * 18) | 0), ch = [];
					for (let j = 0; j < len; j++) ch.push(rg());
					cols.push({ y: Math.random() * H * 1.4 - H * 0.4, sp: 0.4 + Math.random() * 0.9, len, ch });
				}
			}
			function draw(dt) {
				ctx2.clearRect(0, 0, W, H);
				ctx2.font = fs + 'px "M PLUS 1 Code", "Hiragino Sans", monospace';
				ctx2.textBaseline = "top"; ctx2.fillStyle = color;
				for (let i = 0; i < cols.length; i++) {
					const c = cols[i];
					c.y += c.sp * dt * 0.03;
					if (c.y - c.len * fs > H) { c.y = -Math.random() * H * 0.5; c.sp = 0.4 + Math.random() * 0.9; }
					if (Math.random() < 0.03) c.ch[(Math.random() * c.len) | 0] = rg();
					const row = Math.floor(c.y / fs);
					for (let j = 0; j < c.len; j++) {
						const y = (row - j) * fs;
						if (y < -fs || y > H) continue;
						const k = 1 - j / c.len;
						ctx2.globalAlpha = j === 0 ? Math.min(1, alpha * 2.2) : alpha * k * k;
						ctx2.fillText(c.ch[j], i * fs, y);
					}
				}
				ctx2.globalAlpha = 1;
			}
			function loop(t) {
				raf = requestAnimationFrame(loop);
				if (document.hidden) { last = t; return; }
				if (t - last < 50) return;
				draw(Math.min(100, t - (last || t))); last = t;
			}
			return {
				start(c, a, moving) {
					color = c; alpha = a;
					if (!cv) {
						cv = document.createElement("canvas"); cv.id = "cl-rain"; cv.setAttribute("aria-hidden", "true");
						ctx2 = cv.getContext("2d"); document.body.prepend(cv); size();
						addEventListener("resize", size);
					}
					cancelAnimationFrame(raf);
					if (moving) raf = requestAnimationFrame(loop); else draw(0);
				},
				stop() {
					cancelAnimationFrame(raf);
					if (cv) { removeEventListener("resize", size); cv.remove(); cv = null; ctx2 = null; }
				}
			};
		}

		// ---------- 界面组件 ----------
		function PaletteIcon({ size }) {
			const s = size || 18;
			return h("svg", { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" },
				h("path", { d: "M12 3a9 9 0 1 0 0 18c1.2 0 1.6-.9 1.2-1.8-.5-1-.1-2.2 1.2-2.2H17a4 4 0 0 0 4-4c0-5-4-10-9-10z" }),
				h("circle", { cx: 7.5, cy: 11, r: 1 }), h("circle", { cx: 10, cy: 7, r: 1 }), h("circle", { cx: 15, cy: 7.5, r: 1 }));
		}
		function SkinPage({ store, choose, reset, setLayout }) {
			const state = React.useSyncExternalStore(store.subscribe, store.get);
			return h("div", { className: "cl-skin-page" },
				h("h1", null, "皮肤"),
				h("p", { className: "sub" }, PRODUCT + " 的三套外观。只改颜色、字体和背景，不影响会话和功能。"),
				h("div", { className: "cl-skin-grid", role: "group", "aria-label": "选择皮肤" },
					SKINS.map((s) => h("button", { key: s.id, type: "button", className: "cl-skin-card", "aria-pressed": state.skin === s.id, onClick: () => choose(s.id) },
						h("span", { className: "cl-skin-prev", style: { background: s.preview.bg } },
							h("i", { style: { background: s.preview.side } }), h("i", { style: { background: "transparent" } }),
							h("em", { style: { background: s.preview.line } }), h("em", { style: { background: s.preview.line } }),
							h("b", { style: { background: s.preview.dot } })),
						h("span", { className: "cl-skin-name" }, s.name, state.skin === s.id ? h("small", null, "使用中") : null),
						h("span", { className: "cl-skin-desc" }, s.desc)))),
				h("div", { className: "cl-skin-row" },
					h("button", { type: "button", className: "cl-skin-tog", "aria-pressed": state.rain, onClick: () => store.set({ rain: !state.rain }) }, "代码雨"),
					h("button", { type: "button", className: "cl-skin-tog", "aria-pressed": state.motion, onClick: () => store.set({ motion: !state.motion }) }, "动效"),
					h("button", { type: "button", className: "cl-skin-tog", "aria-pressed": false, onClick: reset }, "恢复 Harness 默认外观")),
				h("h2", { className: "cl-skin-h2" }, "布局"),
				h("div", { className: "cl-skin-row", role: "group", "aria-label": "选择布局" },
					h("button", { type: "button", className: "cl-skin-tog", "aria-pressed": state.layout === "life", onClick: () => setLayout("life") }, "代码人生布局"),
					h("button", { type: "button", className: "cl-skin-tog", "aria-pressed": state.layout === "official", onClick: () => setLayout("official") }, "Harness 原布局")),
				h("p", { className: "cl-skin-note" }, "切换布局会自动刷新一次窗口。"),
				h("h2", { className: "cl-skin-h2" }, "主页称呼"),
				h("div", { className: "cl-skin-row" },
					h("input", { id: "cl-display-name", className: "cl-skin-input", type: "text", maxLength: 16, placeholder: "留空则用账号昵称", value: state.displayName || "", onChange: (e) => store.set({ displayName: e.target.value }), "aria-label": "主页问候里怎么称呼你" })),
				h("p", { className: "cl-skin-note" }, PRODUCT + " " + VERSION + " · 兼容 DeepSeek Harness " + COMPAT + " · 非 DeepSeek 官方产品"),
				h("p", { className: "cl-skin-note" }, "代码雨只在本皮肤下出现，铺在界面背后；系统开启“减少动态效果”时自动停住。"));
		}


		// ---------- 代码人生外框：顶替官方 AppFrame ----------
		// 代码人生标志：圆角终端框＋提示符 ">"＋青柠光标 "_"（通用版不分发任何工作室品牌资产）
		const PRODUCT = "代码人生";
		const VERSION = "{{VERSION}}";
		const COMPAT = "0.2.1-rc.3";
		const markSvg = (ring) => "data:image/svg+xml;base64," + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect x="4" y="4" width="32" height="32" rx="9" fill="none" stroke="' + ring + '" stroke-width="3"/><path d="M12 14l7 6-7 6" fill="none" stroke="' + ring + '" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="21" y="24" width="9" height="3.6" rx="1.8" fill="#D7FF4F"/></svg>');
		const MARK_REV = markSvg("#F4F4F2");
		const ROOT_CHILDREN = {
			"sidebar": { kind: "single", scope: "root" },
			"main": { kind: "keyed", scope: "root" },
			"rightbar": { kind: "single", scope: "root" },
			"shell.bottom": { kind: "single", scope: "root" },
			"shell.overlay": { kind: "list", scope: "root" },
			"shell.leading": { kind: "single", scope: "root" }
		};
		const PANEL_ICONS = {
			plugins: "M8 3v4M16 3v4M5 7h14v5a7 7 0 0 1-14 0zM12 19v2",
			schedules: "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
			"cl-skins": "M12 3a9 9 0 1 0 0 18c1.2 0 1.6-.9 1.2-1.8-.5-1-.1-2.2 1.2-2.2H17a4 4 0 0 0 4-4c0-5-4-10-9-10z"
		};
		const CHAT_ICON = "M4 5h16v11H9l-5 4z";
		const GEAR_ICON = "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2";
		const pad2 = (n) => String(n).padStart(2, "0");
		function hhmm(t) { const d = new Date(t); return isNaN(d) ? "—" : pad2(d.getHours()) + ":" + pad2(d.getMinutes()); }
		function stamp(t) {
			const d = new Date(t);
			if (isNaN(d)) return "";
			const now = new Date();
			if (d.toDateString() === now.toDateString()) return hhmm(d);
			return (d.getMonth() + 1) + "/" + d.getDate();
		}
		function labelOf(v, fallback) {
			try { if (typeof v === "function") v = v(); } catch (e) { v = undefined; }
			return typeof v === "string" && v ? v : fallback;
		}
		// 会话列表：去掉空白会话、子代理会话，按更新时间倒序
		function listSessions(state) {
			const all = Object.values((state && state.byId) || {});
			return all.filter((s) => s && s.id && !s.blank && !s.parentId && !s.parentSessionId && !s.subagent && !s.archived)
				.sort((a, b) => (Date.parse(b.updatedAt) || 0) - (Date.parse(a.updatedAt) || 0));
		}
		function isCurrent(s) { return !!(s && s.retainedBy && (s.retainedBy.mainView || 0) > 0); }
		function sessionSig(state) {
			return listSessions(state).map((s) => [s.id, s.title, !!s.running, s.updatedAt, isCurrent(s) ? 1 : 0].join("\u0001")).join("\u0002");
		}

		// 会话右键菜单：重命名 / 置顶 / 复制 ID / 归档（Harness 官方没有“删除会话”，只有归档）
		function SessionMenu({ menu, ops, onClose }) {
			const ref = React.useRef(null);
			const [mode, setMode] = React.useState("menu");
			const [draft, setDraft] = React.useState(menu.title);
			const [err, setErr] = React.useState("");
			const [busy, setBusy] = React.useState(false);
			const [pos, setPos] = React.useState({ left: menu.x, top: menu.y });
			React.useLayoutEffect(() => {
				const el = ref.current; if (!el) return;
				const r = el.getBoundingClientRect();
				setPos({ left: Math.max(8, Math.min(menu.x, innerWidth - r.width - 8)), top: Math.max(8, Math.min(menu.y, innerHeight - r.height - 8)) });
				const first = el.querySelector("input,button"); if (first) { first.focus(); if (first.select) first.select(); }
			}, [mode]);
			React.useEffect(() => {
				const down = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose(); };
				const key = (e) => { if (e.key === "Escape") { e.stopPropagation(); onClose(); } };
				document.addEventListener("mousedown", down, true); document.addEventListener("keydown", key, true);
				return () => { document.removeEventListener("mousedown", down, true); document.removeEventListener("keydown", key, true); };
			}, [onClose]);
			const act = async (fn) => {
				setBusy(true); setErr("");
				try { await fn(); onClose(); } catch (e) { setErr("没成功：" + ((e && e.message) || "请稍后再试")); setBusy(false); }
			};
			const item = (label, onClick, cls) => h("button", { type: "button", role: "menuitem", className: cls, disabled: busy, onClick }, label);
			let body;
			if (mode === "rename") {
				const save = () => { const v = draft.trim(); if (!v || v === menu.title) { onClose(); return; } act(() => ops.rename(menu.id, v)); };
				body = [h("div", { key: "t", className: "mt" }, "重命名会话"),
					h("input", { key: "i", id: "jf-rename-" + menu.id, value: draft, maxLength: 80, "aria-label": "会话名称", onChange: (e) => setDraft(e.target.value), onKeyDown: (e) => { if (e.key === "Enter") { e.preventDefault(); save(); } } }),
					h("div", { key: "r", className: "row" }, h("button", { type: "button", onClick: onClose }, "取消"), h("button", { type: "button", onClick: save, disabled: busy }, "保存"))];
			} else if (mode === "confirm") {
				body = [h("div", { key: "m", className: "msg" }, "这个会话正在运行，归档后它会停下来。确定归档吗？"),
					h("div", { key: "r", className: "row" }, h("button", { type: "button", onClick: onClose }, "取消"), h("button", { type: "button", className: "warn", disabled: busy, onClick: () => act(() => ops.archive(menu.id)) }, "归档"))];
			} else if (menu.archived) {
				body = [h("div", { key: "t", className: "mt" }, menu.title),
					item("取消归档", () => act(() => ops.unarchive(menu.id))),
					item("复制会话 ID", () => act(() => navigator.clipboard.writeText(menu.id)))];
			} else {
				body = [h("div", { key: "t", className: "mt" }, menu.title),
					item("重命名", () => setMode("rename")),
					item(menu.pinned ? "取消置顶" : "置顶", () => act(() => (menu.pinned ? ops.unpin(menu.id) : ops.pin(menu.id)))),
					item("复制会话 ID", () => act(() => navigator.clipboard.writeText(menu.id))),
					h("div", { key: "s", className: "sep" }),
					item("归档", () => (menu.running ? setMode("confirm") : act(() => ops.archive(menu.id))), "warn")];
			}
			return h("div", { ref, className: "jf-menu", role: "menu", "aria-label": "会话操作", style: pos }, body, err ? h("div", { className: "err", role: "alert" }, err) : null);
		}
		const EMPTY_WS = { subscribe: () => () => {}, getSnapshot: () => null };

		function Svg({ d }) { return h("svg", { viewBox: "0 0 24 24", "aria-hidden": "true" }, h("path", { d })); }
		function useNow() {
			const [now, setNow] = React.useState(() => new Date());
			React.useEffect(() => { const t = setInterval(() => setNow(new Date()), 15000); return () => clearInterval(t); }, []);
			return now;
		}
		function Gauge({ ratio, big, sub }) {
			const C = 2 * Math.PI * 56, r = Math.max(0, Math.min(1, ratio)), a = r * Math.PI * 2;
			const ticks = [];
			for (let i = 0; i < 60; i++) {
				const t = (i / 60) * Math.PI * 2, L = i % 5 === 0 ? 72 : 69;
				ticks.push(h("line", { key: i, x1: 75 + 66 * Math.sin(t), y1: 75 - 66 * Math.cos(t), x2: 75 + L * Math.sin(t), y2: 75 - L * Math.cos(t), stroke: "var(--jf-faint)", strokeWidth: i % 5 === 0 ? 1.2 : 0.7 }));
			}
			return h("div", { className: "jf-gauge" },
				h("svg", { viewBox: "0 0 150 150", "aria-hidden": "true" }, ticks,
					h("circle", { cx: 75, cy: 75, r: 56, fill: "none", stroke: "var(--jf-line)", strokeWidth: 5 }),
					h("circle", { cx: 75, cy: 75, r: 56, fill: "none", stroke: "var(--jf-accent)", strokeWidth: 5, strokeLinecap: "round", strokeDasharray: (C * r).toFixed(1) + " " + C.toFixed(1), transform: "rotate(-90 75 75)" }),
					r > 0 ? h("circle", { cx: 75 + 56 * Math.sin(a), cy: 75 - 56 * Math.cos(a), r: 5, fill: "var(--jf-accent)" }) : null),
				h("div", { className: "c" }, h("div", { className: "big" }, big), h("div", { className: "jf-mono" }, sub)));
		}

		// 官方对话区里已经算好的数字（上下文占用、轮次/步数、速度、步骤）直接从页面上读，仪表栏照原型重排
		const HX = { conv: "kiGsTW", input: "JZLxKW", meter: "X0HXfW", chat: "tnXGgG", msg: "AkCqbG", proc: "gTO55a", tool: "UHhYua", stats: "TQ0rwa", hero: "_8tPydW", md: "XNZzAa" };
		const q = (cls) => '[class*="' + cls + '"]';
		function readMirror() {
			const text = (el) => (el ? el.textContent.replace(/\s+/g, " ").trim() : "");
			const pct = parseFloat(text(document.querySelector(q(HX.meter + "_trigger")))) || 0;
			const pills = [...document.querySelectorAll(q(HX.stats + "_pill"))].map(text);
			const steps = [...document.querySelectorAll(q(HX.proc + "_root"))].map(text).filter(Boolean).slice(-6);
			const running = !!document.querySelector(q(HX.chat + "_running"));
			const find = (re) => { for (const s of pills) { const m = s.match(re); if (m) return m; } return null; };
			const turns = find(/(\d+)\s*轮\s*(\d+)\s*步/);
			const speed = find(/([\d.]+)\s*tok\/s/);
			const tok = find(/([\d.]+[KMk]?)\s*tok(?!\/)/);
			const cache = find(/缓存命中\s*(\d+%)/);
			return { pct, turns: turns ? turns[1] + " 轮 " + turns[2] + " 步" : "", speed: speed ? speed[1] : "", tok: tok ? tok[1] + " tok" : "", cache: cache ? cache[1] : "", steps, running };
		}
		function useMirror() {
			const [m, setM] = React.useState(readMirror);
			React.useEffect(() => {
				let last = JSON.stringify(m);
				const t = setInterval(() => { const next = readMirror(); const s = JSON.stringify(next); if (s !== last) { last = s; setM(next); } }, 1000);
				return () => clearInterval(t);
			}, []);
			return m;
		}

		function LifeFrame(props) {
			const { renderSlot, useSessions, usePanelInfo, store, layout, workspace, panels, choose } = props;
			const mirror = useMirror();
			const ghostRef = React.useRef(null);
			// 账户头像：从看不见的官方侧栏里读（已登录时官方会显示 DeepSeek 账号头像）
			const [avatar, setAvatar] = React.useState("");
			React.useEffect(() => {
				const read = () => { const img = ghostRef.current && ghostRef.current.querySelector('[class*="_settingsArea"] img'); const src = img ? img.getAttribute("src") || "" : ""; setAvatar((old) => (old === src ? old : src)); };
				read(); const t = setInterval(read, 2000); return () => clearInterval(t);
			}, []);
			const openSettings = () => {
				const g = ghostRef.current;
				const btn = g && (g.querySelector('[class*="_settingsArea"] button') || g.querySelector('[class*="_footArea"] button'));
				if (btn) btn.click(); else { try { console.warn("[cl-skin] 没找到设置入口"); } catch (e) {} }
			};
			const state = React.useSyncExternalStore(store.subscribe, store.get);
						const active = usePanelInfo ? usePanelInfo((info) => info.activePanelId) : null;
			const sig = useSessions ? useSessions(sessionSig) : "";
			const sessions = React.useMemo(() => {
				const out = [];
				for (const row of sig ? sig.split("\u0002") : []) {
					const [id, title, run, updatedAt, cur] = row.split("\u0001");
					out.push({ id, title: title || "未命名会话", running: run === "true", updatedAt, current: cur === "1" });
				}
				return out;
			}, [sig]);
			const panelList = React.useSyncExternalStore(panels.subscribe, panels.get);
			const now = useNow();
			const [vw, setVw] = React.useState(() => innerWidth);
			React.useEffect(() => { const f = () => setVw(innerWidth); addEventListener("resize", f); return () => removeEventListener("resize", f); }, []);
			const current = sessions.find((s) => s.current);
			const running = sessions.filter((s) => s.running).length;
			const today = new Date().toDateString();
			const goChat = () => { try { layout.selectPanel(null); } catch (e) {} };
			// 先切回会话页再新建/打开：官方导航是异步的，之后再切页会把它取消（beginNavigation）
			const open = (id) => { if (active != null) goChat(); workspace.openSession(id); };
			const startNew = () => { if (active != null) goChat(); workspace.startSession(); };
			const main = React.useMemo(() => renderSlot("main", {}, { entryKey: active ?? "conversation" }), [renderSlot, active]);
			const rbWidth = Math.round(Math.min(560, Math.max(320, vw * 0.4)));
			let lastGroup = "";
			const wsList = (workspace && workspace.wsList) || EMPTY_WS;
			const wsSnap = React.useSyncExternalStore(wsList.subscribe, wsList.getSnapshot);
			const pinnedIds = (wsSnap && wsSnap.pinnedSessionIds) || [];
			const archivedSet = new Set((wsSnap && wsSnap.archivedSessionIds) || []);
			const [menu, setMenu] = React.useState(null);
			const [showArchived, setShowArchived] = React.useState(false);
			const closeMenu = React.useCallback(() => setMenu(null), []);
			const live = sessions.filter((s) => !archivedSet.has(s.id));
			const archivedRows = sessions.filter((s) => archivedSet.has(s.id));
			const pinOrder = new Map(pinnedIds.map((id, i) => [id, i]));
			const ordered = live.filter((s) => pinOrder.has(s.id)).sort((a, b) => pinOrder.get(a.id) - pinOrder.get(b.id)).concat(live.filter((s) => !pinOrder.has(s.id)));
			const openMenu = (s, x, y) => setMenu({ id: s.id, title: s.title, x, y, running: s.running, pinned: pinOrder.has(s.id), archived: archivedSet.has(s.id) });
			const row = (s, g) => h("div", { key: s.id, className: "jf-row" + (g === "已归档" ? " archived" : ""), onContextMenu: (e) => { e.preventDefault(); openMenu(s, e.clientX, e.clientY); } },
				h("button", { type: "button", className: "jf-sess", "aria-current": s.current && active == null ? "true" : "false", onClick: (e) => { if (g !== "已归档") { open(s.id); return; } const r = e.currentTarget.getBoundingClientRect(); openMenu(s, r.left + 24, r.bottom); }, onKeyDown: (e) => { if (e.key === "ContextMenu" || (e.shiftKey && e.key === "F10")) { e.preventDefault(); const r = e.currentTarget.getBoundingClientRect(); openMenu(s, r.left + 24, r.bottom); } } },
					h("i", { className: "jf-dot" + (s.running ? " run" : "") }), h("span", { className: "t" }, s.title, pinOrder.has(s.id) ? h("span", { className: "pin", "aria-label": "已置顶" }, "▲") : null), h("span", { className: "n" }, stamp(s.updatedAt))),
				h("button", { type: "button", className: "jf-more", "aria-label": "会话“" + s.title + "”的操作", "aria-haspopup": "menu", "aria-expanded": menu && menu.id === s.id ? "true" : "false", onClick: (e) => { const r = e.currentTarget.getBoundingClientRect(); openMenu(s, r.left, r.bottom + 4); } }, "⋯"));
			return h("div", { className: "jf", "data-cl-frame": "", style: { "--jf-jrev": 'url("' + MARK_REV + '")' } },
				h("div", { className: "jf-env", "aria-hidden": "true" },
					h("svg", { className: "jf-arc", viewBox: "19 10 252 270" }, h("path", { d: "M241 40V137C241 207 201 250 142 250C122 250 103 244 91 232", fill: "none", strokeWidth: 60, strokeLinecap: "round" })),
					h("div", { className: "jf-orb" })),
				h("div", { className: "jf-top", "data-window-drag": "" }, active === HOME_ID ? "主页" : active ? (panelList.find((p) => p.id === active)?.label || PRODUCT) : current ? current.title : PRODUCT),
				h("div", { className: "jf-grid" },
					h("nav", { className: "jf-pane jf-rail", "aria-label": "导航" },
						h("button", { type: "button", className: "jf-jchip", title: "主页", "aria-label": "主页", "aria-current": active === HOME_ID ? "page" : undefined, onClick: () => { try { layout.selectPanel(HOME_ID); } catch (e) {} } }, h("img", { src: MARK_REV, alt: "" })),
						h("button", { type: "button", className: "jf-ic", "aria-label": "会话", title: "会话", "aria-current": active == null ? "page" : undefined, onClick: goChat }, h(Svg, { d: CHAT_ICON })),
						panelList.filter((p) => p.id !== HOME_ID).map((p) => h("button", { key: p.id, type: "button", className: "jf-ic", "aria-label": p.label, title: p.label, "aria-current": active === p.id ? "page" : undefined, onClick: () => { try { layout.selectPanel(p.id); } catch (e) {} } },
							PANEL_ICONS[p.id] ? h(Svg, { d: PANEL_ICONS[p.id] }) : h("span", { className: "jf-glyph" }, p.label.slice(0, 1)))),
						h("span", { className: "jf-sp" }),
						h("button", { type: "button", className: "jf-ic jf-avatar", "aria-label": "账户与设置", title: "账户与设置", onClick: openSettings }, avatar ? h("img", { src: avatar, alt: "", referrerPolicy: "no-referrer" }) : h(Svg, { d: GEAR_ICON }))),
					h("aside", { className: "jf-pane jf-side", "aria-label": "会话列表" },
						h("div", { className: "jf-brand" }, h("span", { className: "jf-word" }, PRODUCT)),
						h("div", { className: "jf-hd" }, h("b", null, "会话"), h("button", { type: "button", className: "jf-new", onClick: startNew }, "＋ 新建")),
						h("div", { className: "jf-list" },
							live.length === 0 ? h("div", { className: "jf-empty" }, "还没有会话。点「＋ 新建」开始。") : null,
							ordered.map((s) => {
								const g = pinOrder.has(s.id) ? "置顶" : new Date(s.updatedAt).toDateString() === today ? "今天" : "更早";
								const head = g !== lastGroup ? h("div", { key: "g" + g, className: "jf-grp" }, g) : null;
								lastGroup = g;
								return [head, row(s, g)];
							}),
							archivedRows.length ? h("button", { key: "arch", type: "button", className: "jf-arch", "aria-expanded": showArchived ? "true" : "false", onClick: () => setShowArchived((v) => !v) }, h("span", null, "已归档 · " + archivedRows.length), h("span", null, showArchived ? "收起 ▴" : "展开 ▾")) : null,
							showArchived ? archivedRows.map((s) => row(s, "已归档")) : null)),
					// 菜单放在面板外：面板有毛玻璃（backdrop-filter），会把 fixed 定位关在面板里并裁掉
					menu ? h(SessionMenu, { key: menu.id + menu.x + menu.y, menu, ops: workspace, onClose: closeMenu }) : null,

					h("main", { className: "jf-pane jf-main" }, h("div", { className: "jf-mainin" }, main)),
					h("aside", { className: "jf-pane jf-hud", "aria-label": "仪表" },
						h("span", { className: "jf-k" }, h("span", null, "上下文"), h("span", { className: "jf-mono" }, hhmm(now))),
						h(Gauge, { ratio: mirror.pct / 100, big: h(React.Fragment, null, String(Math.round(mirror.pct)), h("small", null, "%")), sub: mirror.tok || "暂无数据" }),
						h("div", { className: "jf-stats" },
							h("div", { className: "jf-stat" }, h("div", { className: "v" }, mirror.turns || "—"), h("div", { className: "l" }, "轮次 · 步骤")),
							h("div", { className: "jf-stat" }, h("div", { className: "v" }, mirror.speed || "—"), h("div", { className: "l" }, "tok/s")),
							h("div", { className: "jf-stat" }, h("div", { className: "v" }, mirror.cache || "—"), h("div", { className: "l" }, "缓存命中")),
							h("div", { className: "jf-stat" }, h("div", { className: "v" }, running + " / " + sessions.length), h("div", { className: "l" }, "运行中会话"))),
						h("span", { className: "jf-k" }, h("span", null, "步骤")),
						h("ul", { className: "jf-tl" },
							mirror.steps.length ? mirror.steps.map((s, i) => h("li", { key: i, className: "ok" }, h("time", { className: "jf-mono" }, String(i + 1).padStart(2, "0")), h("span", null, s))) : h("li", null, h("time", { className: "jf-mono" }, "—"), h("span", null, "还没有步骤")),
							mirror.running ? h("li", { className: "run" }, h("time", { className: "jf-mono" }, "现在"), h("span", null, "思考中…")) : null),
						current ? h("div", { className: "jf-cur" }, h("span", { className: "jf-k" }, h("span", null, "当前会话")), h("b", null, current.title), h("span", { className: "jf-mono" }, (current.running ? "● 运行中" : "○ 空闲") + " · " + stamp(current.updatedAt))) : null)),
				h("div", { className: "jf-bottom" }, renderSlot("shell.bottom", {})),
				h("div", { className: "jf-rightbar" }, renderSlot("rightbar", { width: rbWidth, viewportWidth: vw, canShow: true })),
				h("div", { className: "jf-ghost", ref: ghostRef }, renderSlot("sidebar", { collapsed: false, width: 280 })),
				h("div", { className: "jf-overlay" }, renderSlot("shell.overlay", {})));
		}


		// ---------- 主页：问候 + 此刻 + 推荐动作 + 最近会话 + 工作区全景（分层，默认只展开前几层） ----------
		const HOME_ID = "cl-home";
		const HOME_ICON = "M3 11l9-7 9 7M5 10v10h5v-6h4v6h5V10";
		function pick(list, seed) { return list[Math.abs(seed) % list.length]; }
		function greet(now, ctx, name) {
			const hr = now.getHours(), seed = now.getDate();
			const hi = hr < 5 ? "夜深了" : hr < 9 ? "早安" : hr < 12 ? "上午好" : hr < 14 ? "午安" : hr < 18 ? "下午好" : hr < 21 ? "傍晚好" : "晚上好";
			let sub;
			if (ctx.running > 0) sub = pick(["有 " + ctx.running + " 个任务正在跑，先让它们忙一会儿。", ctx.running + " 个任务在替你干活，你可以喝口水。"], seed);
			else if (hr < 5) sub = pick(["今天已经很努力了，剩下的交给明天。", "夜里灵感多，但别忘了睡。"], seed);
			else if (ctx.today > 0) sub = pick(["今天已经推进了 " + ctx.today + " 件事，接着来？", "节奏不错，挑下一件最想做的。"], seed);
			else sub = pick(["今天很安静，适合把一个想法变得更具体一点。", "从一句话开始，剩下的交给我。"], seed);
			return { hi: hi + (name ? "，" + name + "。" : "。"), sub };
		}
		function baseName(path) { if (!path) return "未归类"; const parts = String(path).split(/[\\/]/).filter(Boolean); return parts[parts.length - 1] || path; }
		function homeSig(state) {
			return listSessions(state).map((s) => [s.id, s.title, !!s.running, s.updatedAt, s.cwd || ""].join("\u0001")).join("\u0002");
		}
		function HomePage(props) {
			const { useSessions, workspace, layout, store, account } = props;
			const sig = useSessions ? useSessions(homeSig) : "";
			const sessions = React.useMemo(() => (sig ? sig.split("\u0002") : []).map((row) => { const [id, title, run, updatedAt, cwd] = row.split("\u0001"); return { id, title: title || "未命名会话", running: run === "true", updatedAt, cwd }; }), [sig]);
			const now = useNow();
			const st = React.useSyncExternalStore(store.subscribe, store.get);
			const acct = React.useSyncExternalStore(account.subscribe, account.get);
			const name = (st.displayName || acct.name || "").trim();
			const [text, setText] = React.useState("");
			const todayStr = now.toDateString();
			const running = sessions.filter((s) => s.running);
			const todayCount = sessions.filter((s) => new Date(s.updatedAt).toDateString() === todayStr).length;
			const g = greet(now, { running: running.length, today: todayCount }, name);
			const open = (id) => { try { layout.selectPanel(null); } catch (e) {} workspace.openSession(id); };
			const draft = (prompt) => { try { layout.selectPanel(null); } catch (e) {} workspace.startSession(prompt ? { prompt, whenDraftExists: "append" } : undefined); };
			const submit = () => { const t = text.trim(); if (!t) return; setText(""); draft(t); };
			// 「此刻」：最多 3 件——运行中的会话优先，其次今天动过的会话
			const focus = [];
			running.forEach((s) => focus.push({ key: "r" + s.id, tone: "run", title: "正在跑：" + s.title, sub: baseName(s.cwd) + " · 更新于 " + stamp(s.updatedAt), go: "查看", onClick: () => open(s.id) }));
			sessions.filter((s) => !s.running && new Date(s.updatedAt).toDateString() === todayStr).forEach((s) => focus.push({ key: "t" + s.id, tone: "", title: "今天聊过：" + s.title, sub: baseName(s.cwd) + " · " + stamp(s.updatedAt), go: "继续", onClick: () => open(s.id) }));
			const focusTop = focus.slice(0, 3);
			const recs = [];
			const last = sessions.find((s) => !s.running);
			if (last) recs.push({ label: "继续「" + last.title + "」", onClick: () => open(last.id) });
			recs.push({ label: "理一理今天要做的事", onClick: () => draft("帮我把今天要做的事按轻重缓急排个序：\n- ") });
			recs.push({ label: "看看这个工作区里有什么", onClick: () => draft("先帮我快速了解一下当前工作区：有哪些文件、大概是做什么的？") });
			// 全景：按工作区（会话的工作目录）分组
			const groups = {};
			sessions.forEach((s) => { const k = baseName(s.cwd); (groups[k] = groups[k] || { name: k, total: 0, running: 0, last: s.updatedAt }).total++; if (s.running) groups[k].running++; });
			const groupList = Object.values(groups);
			return h("div", { className: "jh" }, h("div", { className: "jh-in" },
				h("section", { className: "jh-hero", "aria-label": "问候" },
					h("div", { className: "jh-hi" }, h("img", { src: MARK_REV, alt: "" }), g.hi),
					h("p", { className: "jh-sub" }, g.sub),
					h("form", { className: "jh-box", onSubmit: (e) => { e.preventDefault(); submit(); } },
						h("textarea", { className: "jh-input", id: "jh-input", rows: 2, value: text, placeholder: "今天想让我做什么？", "aria-label": "写下要做的事", onChange: (e) => setText(e.target.value), onKeyDown: (e) => { if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); submit(); } } }),
						h("div", { className: "jh-row" },
							h("button", { type: "button", className: "jh-chip", onClick: () => draft() }, "＋ 空白会话"),
							h("span", { className: "sp" }),
							h("span", { className: "jh-chip", style: { cursor: "default" } }, "回车后在新会话里确认再发送"),
							h("button", { type: "submit", className: "jh-send", "aria-label": "开始", "aria-disabled": text.trim() ? "false" : "true" }, h("svg", { viewBox: "0 0 24 24", "aria-hidden": "true" }, h("path", { d: "M5 12h14M13 6l6 6-6 6" }))))),
					h("div", { className: "jh-meta" }, h("span", null, now.toLocaleDateString("zh-CN", { month: "long", day: "numeric", weekday: "long" })), h("span", { className: "jf-mono" }, hhmm(now)))),
				h("section", { className: "jh-sec", "aria-label": "此刻" },
					h("div", { className: "jh-k" }, h("span", null, "此刻"), h("span", null, focus.length > 3 ? "还有 " + (focus.length - 3) + " 件在下方" : "")),
					h("div", { className: "jh-list" }, focusTop.length ? focusTop.map((f) => h("button", { key: f.key, type: "button", className: "jh-item", onClick: f.onClick },
						h("i", { className: "jh-dot " + f.tone }), h("span", null, h("b", null, f.title), h("span", { className: "s" }, f.sub)), h("span", { className: "go" }, f.go))) : h("div", { className: "jh-item" }, h("i", { className: "jh-dot done" }), h("span", null, h("b", null, "没有正在进行的事"), h("span", { className: "s" }, "可以从一个新想法开始")), h("span", null)))),
				h("section", { className: "jh-sec", "aria-label": "推荐动作" },
					h("div", { className: "jh-k" }, h("span", null, "推荐动作")),
					h("div", { className: "jh-recs" }, recs.slice(0, 3).map((r, i) => h("button", { key: i, type: "button", className: "jh-chip", onClick: r.onClick }, r.label)))),
				sessions.length ? h("section", { className: "jh-sec", "aria-label": "最近会话" },
					h("div", { className: "jh-k" }, h("span", null, "最近会话"), h("button", { type: "button", className: "jh-chip", onClick: () => { try { layout.selectPanel(null); } catch (e) {} } }, "查看全部")),
					h("div", { className: "jh-cards" }, sessions.slice(0, 3).map((s) => h("button", { key: s.id, type: "button", className: "jh-card", onClick: () => open(s.id) }, h("b", null, s.title), h("span", null, (s.running ? "● 运行中 · " : "") + stamp(s.updatedAt)))))) : null,
				groupList.length ? h("details", null,
					h("summary", null, h("span", null, "工作区全景（" + groupList.length + " 个工作区 · " + sessions.length + " 个会话）"), h("span", null, "展开 ▾")),
					h("div", { className: "jh-grid2" }, groupList.map((g2) => h("div", { key: g2.name, className: "jh-mini" }, h("b", null, g2.name), h("span", null, g2.total + " 个会话" + (g2.running ? " · " + g2.running + " 个运行中" : "")), h("span", null, "最近 " + stamp(g2.last)))))) : null,
				h("p", { className: "jh-foot" }, PRODUCT + " · 非 DeepSeek 官方产品")));
		}

		// 外框出错时不白屏：显示原因和"切回 Harness 原布局"
		class FrameGuard extends React.Component {
			constructor(props) { super(props); this.state = { error: null, tries: 0 }; this.timer = 0; }
			static getDerivedStateFromError(error) { return { error }; }
			componentDidCatch(error) {
				try { console.error("[cl-skin] 自绘外框出错", error); } catch (e) {}
				// 启动早期其他模块还没就绪时会短暂出错：自动重试几次再放弃
				if (this.state.tries < 5) this.timer = setTimeout(() => this.setState((s) => ({ error: null, tries: s.tries + 1 })), 400 * (this.state.tries + 1));
			}
			componentWillUnmount() { clearTimeout(this.timer); }
			render() {
				if (!this.state.error) return this.props.children;
				if (this.state.tries < 5) return h("div", { style: { position: "fixed", inset: 0, background: "var(--cl-page, #171717)" } });
				const back = () => { this.props.store.set({ layout: "official" }); setTimeout(() => location.reload(), 100); };
				return h("div", { style: { position: "fixed", inset: 0, display: "grid", placeItems: "center", background: "#171717", color: "#f4f4f2", fontFamily: "Arial, 'Heiti SC', sans-serif" } },
					h("div", { style: { maxWidth: 520, display: "grid", gap: 12, padding: 24 } },
						h("b", { style: { fontSize: 18 } }, PRODUCT + " 布局出错了"),
						h("code", { style: { fontSize: 12, opacity: 0.7, whiteSpace: "pre-wrap" } }, String(this.state.error && (this.state.error.stack || this.state.error.message) || this.state.error).slice(0, 600)),
						h("button", { type: "button", onClick: back, style: { justifySelf: "start", padding: "8px 16px", borderRadius: 999, border: 0, background: "#f4f4f2", color: "#171717", cursor: "pointer" } }, "切回 Harness 原布局")));
			}
		}
		function SafeFrame(props) { return h(FrameGuard, { store: props.store }, h(LifeFrame, props)); }

		// ---------- 插件主体 ----------
		const inject = ["slots", "theme", "layout", "uiWorkspace"];
		function apply(ctx) {
			try { return applyInner(ctx); } catch (e) { console.error("[cl-skin] apply 失败", e && e.stack || e); throw e; }
		}
		function applyInner(ctx) {
			const store = createStore();
			const rain = createRain();
			let style = null;
			let restored = false;
			// 拦截"切换外观"：别人（设置页）切到内置外观 = 用户的明确选择 → 清掉本皮肤的记忆
			ctx.effect(() => {
				const svc = ctx.theme;
				const orig = svc.setTheme;
				if (typeof orig !== "function") return () => {};
				svc.setTheme = function (id) {
					if (!SKIN_IDS.includes(id) && store.get().skin) store.set({ skin: "" });
					return orig.apply(this, arguments);
				};
				return () => { if (svc.setTheme !== orig) svc.setTheme = orig; };
			}, "cl-skin: watch appearance choice");

			// 1. 注册三套主题（Harness 官方第三方主题接口）
			const disposers = SKINS.map((s) => ctx.theme.register({ id: s.id, colorScheme: s.colorScheme, tokens: Object.assign({}, s.tokens) }));

			// 2. 主题变化时：同步背景、代码雨；用户在设置里改回内置外观时清掉记忆
			const reduce = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
			// fromTheme：只有 Harness 自己换了主题（比如在设置里选回浅色/深色）才清掉记忆
			function sync(fromTheme) {
				const snap = ctx.theme.getTheme();
				const active = SKINS.find((s) => s.id === snap.active.id);
				const root = document.documentElement;
				if (active) {
					root.setAttribute("data-cl-skin", active.id);
					root.style.setProperty("--cl-page", active.page);
					const st = store.get();
					if (st.rain) rain.start(active.rain.color, active.rain.alpha, st.motion && !reduce); else rain.stop();
				} else {
					root.removeAttribute("data-cl-skin");
					root.style.removeProperty("--cl-page");
					rain.stop();
					if (fromTheme === true && restored && store.get().skin) {
						// Harness 启动、重连时都会重新应用它自己记住的外观（偏好值不变）→ 把本皮肤套回去；
						// 偏好值变了，说明用户在设置里换了外观 → 尊重用户，清掉本皮肤的记忆
						// 用户亲手在设置里换外观时，下方拦截已清掉记忆；走到这里说明是 Harness 自己重新应用（启动/重连）
						try { ctx.theme.setTheme(store.get().skin); } catch (e) {}
					}
				}
			}
			ctx.effect(() => {
				style = document.createElement("style");
				style.id = "cl-skin-style";
				style.textContent = CSS;
				document.head.append(style);
				const off = ctx.on("theme/change", () => sync(true));
				const unsub = store.subscribe(() => sync(false));
				// 恢复上次选的皮肤（第三方主题不会被 Harness 记住，所以由本插件记）
				const saved = store.get().skin;
				if (saved) { try { ctx.theme.setTheme(saved); } catch (e) {} }
				restored = true;
				sync(false);
				return () => {
					off(); unsub(); rain.stop(); style.remove();
					document.documentElement.removeAttribute("data-cl-skin");
					document.documentElement.style.removeProperty("--cl-page");
					disposers.forEach((d) => d());
				};
			}, "cl-skin: theme sync");

			const choose = (id) => { ctx.theme.setTheme(id); store.set({ skin: id }); };
			const reset = () => { store.set({ skin: "" }); ctx.theme.setTheme("system"); };
			const report = (what, e) => { try { console.error("[cl-skin] " + what + " 失败", e); } catch (x) {} };
			const layoutApi = { selectPanel: (id) => { try { ctx.layout.selectPanel(id); } catch (e) { report("切换页面", e); } } };
			const call = (what, fn) => Promise.resolve().then(fn).catch((e) => { report(what, e); throw e; });
			const workspaceApi = {
				wsList: (() => { try { const l = ctx.uiWorkspace.workspaces && ctx.uiWorkspace.workspaces.list; return l && l.subscribe && l.getSnapshot ? { subscribe: (cb) => l.subscribe(cb), getSnapshot: () => l.getSnapshot() } : EMPTY_WS; /* 方法要绑回原对象调用，否则丢 this */ } catch (e) { return EMPTY_WS; } })(),
				archive: (id) => call("归档会话", () => ctx.uiWorkspace.archiveSession(id)),
				unarchive: (id) => call("取消归档", () => ctx.uiWorkspace.unarchiveSession(id)),
				pin: (id) => call("置顶会话", () => ctx.uiWorkspace.pinSession(id)),
				unpin: (id) => call("取消置顶", () => ctx.uiWorkspace.unpinSession(id)),
				rename: (id, title) => call("重命名会话", async () => {
					const r = await ctx.uiWorkspace.sessions.using(id, { source: "workspaceOperation" }, (ref) => ref.binding.session.rename(title));
					if (r && r.ok === false) throw new Error((r.error && r.error.message) || "重命名失败");
				}),
				openSession: (id) => { try { ctx.uiWorkspace.openSession(id); } catch (e) { report("打开会话", e); } },
				startSession: (options) => { try { const r = ctx.uiWorkspace.startSession(undefined, options); if (r && r.catch) r.catch((e) => report("新建会话", e)); } catch (e) { report("新建会话", e); } }
			};
			const setLayout = (v) => { if (store.get().layout === v) return; store.set({ layout: v }); setTimeout(() => location.reload(), 150); };

			// 4. 代码人生外框：用更低的 priority 遮蔽官方 AppFrame（位子系统"最低的渲染"）
			if (store.get().layout === "life") {
				const panels = (() => {
					let list = [];
					const listeners = new Set();
					const sync = () => {
						const next = ctx.slots.entriesOfSlot("sidebar.panellist").map(({ options }) => ({ id: options.id, order: options.order ?? 0, label: labelOf(options.label, options.id) })).sort((a, b) => a.order - b.order);
						if (next.length === list.length && next.every((p, i) => p.id === list[i].id && p.label === list[i].label)) return;
						list = next; listeners.forEach((l) => l());
					};
					return { get: () => list, subscribe(l) { listeners.add(l); return () => listeners.delete(l); }, sync };
				})();
				ctx.effect(() => { panels.sync(); return ctx.slots.subscribe("sidebar.panellist", panels.sync); }, "cl-skin: panel entries");
				// 对话区的小装饰：思考中翻滚字符、标题栏"运行中"胶囊（只加不改官方节点）
				ctx.effect(() => {
					const reduceMotion = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
					const tick = () => {
						const st = store.get();
						const still = !st.motion || reduceMotion;
						document.documentElement.classList.toggle("jf-still", still);
						const main = document.querySelector(".jf-main");
						if (!main) return;
						// 状态文字：读官方文字（两层扫光取一层），文字主体变了就重新"解码"一遍；只有秒数变就直接更新
						for (const el of main.querySelectorAll('[class~="tnXGgG_runningText"]')) {
							let t = (el.textContent || "").trim();
							if (t.length % 2 === 0 && t.slice(0, t.length / 2) === t.slice(t.length / 2)) t = t.slice(0, t.length / 2);
							let d = el.nextElementSibling;
							if (!d || !d.classList.contains("jf-run")) {
								d = document.createElement("span"); d.className = "jf-run"; d.setAttribute("aria-hidden", "true");
								d.append(Object.assign(document.createElement("span"), { className: "jf-scr" }), Object.assign(document.createElement("span"), { className: "jf-runtxt" }));
								el.after(d);
							}
							d.firstChild.textContent = still ? "ｼﾝｷﾝｸﾞ..." : Array.from({ length: 10 }, rg).join("");
							d = d.lastChild;
							const base = t.replace(/[0-9.]+/g, "#");
							if (d._base !== base) { d._base = base; d._t0 = performance.now(); d._rev = Array.from(t, (_, i) => (i / t.length) * 700 + Math.random() * 250); }
							const e = performance.now() - d._t0;
							if (still || e > 1000) { if (d.textContent !== t) d.textContent = t; continue; }
							d.replaceChildren(...Array.from(t, (c, i) => (e >= (d._rev[i] ?? 0) || c === " " ? document.createTextNode(c) : Object.assign(document.createElement("i"), { textContent: rg() }))));
						}
						for (const d of main.querySelectorAll(".jf-run")) if (!d.previousElementSibling?.matches('[class~="tnXGgG_runningText"]')) d.remove();
						for (const old of main.querySelectorAll('[class~="tnXGgG_runningIcon"] .jf-scr')) old.remove();
						for (const old of main.querySelectorAll('[class~="tnXGgG_runningText"] .jf-scr')) old.remove();
						const running = !!main.querySelector('[class*="tnXGgG_running"]');
						const actions = main.querySelector('[class*="kiGsTW_headerActions"]');
						let pill = main.querySelector(".jf-livepill");
						if (running && actions && !pill) { pill = document.createElement("span"); pill.className = "jf-livepill"; pill.textContent = "运行中"; actions.append(pill); }
						if (!running && pill) pill.remove();
					};
					const t = setInterval(tick, 110);
					return () => { clearInterval(t); document.documentElement.classList.remove("jf-still"); };
				}, "cl-skin: conversation decorations");
				ctx.effect(() => {
					document.documentElement.setAttribute("data-cl-layout", "life");
					return () => document.documentElement.removeAttribute("data-cl-layout");
				}, "cl-skin: layout flag");
				// root 是外壳内建的位子，直接注册（官方 ui-layout 也是这样做的）。
				// 子位子已由官方外框声明，重复声明会被拒绝（"slot already declared"）。
				// 所以登记时给空表，登记后再补上子位子名单，只用来"借用"渲染；
				// 撤销前先清空，避免撤销时把官方的声明一起清掉。
				ctx.effect(() => {
					const children = {};
					const dispose = ctx.slots.register({
						name: "root",
						priority: -20,
						children,
						inject: () => ({ store, layout: layoutApi, workspace: workspaceApi, panels, choose })
					}, SafeFrame);
					Object.assign(children, ROOT_CHILDREN);
					return () => {
						for (const k of Object.keys(children)) delete children[k];
						dispose();
					};
				}, "cl-skin: code-life frame");
			}

			// 账号昵称（官方侧栏账户按钮上的名字），主页问候用；买家也可在皮肤页手动填写显示名
			const account = (() => {
				let v = { name: "" }; const ls = new Set();
				const read = () => { const el = document.querySelector('.jf-ghost [class*="_settingsArea"] [class*="_label"]'); const raw = el ? el.textContent.trim() : ""; const n = /^(更多|设置|登录|未登录|More|Settings|Sign in|Log in)$/i.test(raw) ? "" : raw; /* 没登录时按钮上是"更多"等字样，不能当昵称 */ if (n !== v.name) { v = { name: n }; ls.forEach((l) => l()); } };
				return { get: () => v, subscribe(l) { ls.add(l); return () => ls.delete(l); }, read };
			})();
			ctx.effect(() => { account.read(); const t = setInterval(account.read, 2000); return () => clearInterval(t); }, "cl-skin: account name");
			// 主页
			ctx.slots.inject("main", () => ctx.slots.register({ name: "main", key: HOME_ID, inject: () => ({ workspace: workspaceApi, layout: layoutApi, store, account }) }, HomePage));
			ctx.slots.inject("sidebar.panellist", () => ctx.slots.register({ name: "sidebar.panellist", id: HOME_ID, order: -100, label: "主页" }, ({ size }) => h("svg", { width: size || 18, height: size || 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, h("path", { d: HOME_ICON }))));
			ctx.effect(() => { const t = setTimeout(() => { try { if (ctx.layout.panelInfo.getSnapshot().activePanelId == null) ctx.layout.selectPanel(HOME_ID); } catch (e) {} }, 900); return () => clearTimeout(t); }, "cl-skin: open home on start");

			// 3. 侧边栏一栏「皮肤」＋ 主区域页面
			ctx.slots.inject("main", () => ctx.slots.register({
				name: "main",
				key: PANEL_ID,
				inject: () => ({ store, choose, reset, setLayout })
			}, SkinPage));
			ctx.slots.inject("sidebar.panellist", () => ctx.slots.register({
				name: "sidebar.panellist",
				id: PANEL_ID,
				order: 90,
				label: "皮肤"
			}, PaletteIcon));
		}

		exports.SKINS = SKINS;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
