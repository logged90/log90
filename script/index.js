/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
/*             CEF STUDIO            */
var _0x1a6b48 = _0x52e1; (function (_0x534359, _0x1c7e6a) { var _0x939190 = _0x52e1, _0x4b919b = _0x534359(); while (!![]) { try { var _0x44f39d = -parseInt(_0x939190(0x18c)) / 0x1 + parseInt(_0x939190(0x17d)) / 0x2 * (-parseInt(_0x939190(0x183)) / 0x3) + parseInt(_0x939190(0x190)) / 0x4 * (parseInt(_0x939190(0x16b)) / 0x5) + -parseInt(_0x939190(0x16d)) / 0x6 * (parseInt(_0x939190(0x178)) / 0x7) + -parseInt(_0x939190(0x17b)) / 0x8 + parseInt(_0x939190(0x165)) / 0x9 * (parseInt(_0x939190(0x170)) / 0xa) + parseInt(_0x939190(0x16e)) / 0xb * (parseInt(_0x939190(0x182)) / 0xc); if (_0x44f39d === _0x1c7e6a) break; else _0x4b919b['push'](_0x4b919b['shift']()); } catch (_0x4a1799) { _0x4b919b['push'](_0x4b919b['shift']()); } } }(_0x45c7, 0x786d5)); var hud = new Vue({ 'el': _0x1a6b48(0x181), 'data': { 'active': ![], 'server': _0x1a6b48(0x177), 'online': 0x0, 'playerId': 0x0, 'health': 0x0, 'armour': 0x0, 'wanted': 'images/hud/wanted/0.png', 'weaponName': '', 'weapon': _0x1a6b48(0x17c), 'ammo': '', 'max_ammo': '', 'money': moneyFormat() }, 'mounted'() { setInterval(() => { var _0xe7fcb1 = _0x52e1; this['updateHealth'](this[_0xe7fcb1(0x164)]), this[_0xe7fcb1(0x171)](this[_0xe7fcb1(0x18a)]); }, 0x32); }, 'methods': { 'visible'(_0x341f14) { var _0x48c0cd = _0x1a6b48; if (_0x341f14 == 0x0) this['active'] = ![]; else this[_0x48c0cd(0x162)] = !![]; }, 'updateHealth'(_0x12c083) { var _0x77687f = _0x1a6b48; const _0x11e5db = document[_0x77687f(0x179)](_0x77687f(0x164)), _0x56f42a = 0x2 * Math['PI'] * parseFloat(_0x11e5db[_0x77687f(0x163)]('r')), _0x3a998d = _0x56f42a - _0x12c083 / 0x64 * _0x56f42a; _0x11e5db[_0x77687f(0x185)]['strokeDashoffset'] = _0x3a998d; }, 'updateArmour'(_0x505fc7) { var _0x37ff24 = _0x1a6b48; const _0x372bf1 = document['getElementById'](_0x37ff24(0x18a)), _0x4b36f6 = 0x2 * Math['PI'] * parseFloat(_0x372bf1[_0x37ff24(0x163)]('r')), _0x2125f4 = _0x4b36f6 - _0x505fc7 / 0x64 * _0x4b36f6; _0x372bf1[_0x37ff24(0x185)][_0x37ff24(0x16c)] = _0x2125f4; } } }); function moneyFormat(_0x4748b5) { var _0x5628c8 = _0x1a6b48, _0x491ef0 = '' + _0x4748b5, _0x45685d = _0x491ef0, _0x429ec5 = _0x491ef0[_0x5628c8(0x18f)], _0x1d3739 = 0x0; for (var _0x4b23be = 0x0; _0x4b23be < _0x429ec5 - 0x1; _0x4b23be++) { if (_0x45685d[_0x4b23be] == '.') continue; (_0x429ec5 - (_0x4b23be + 0x1)) % 0x3 == 0x0 && (_0x1d3739++, _0x45685d = _0x45685d[_0x5628c8(0x168)](0x0, _0x4b23be + _0x1d3739) + '.' + _0x45685d[_0x5628c8(0x168)](_0x4b23be + _0x1d3739)); } return _0x45685d; } var speedometer = new Vue({ 'el': _0x1a6b48(0x174), 'data': { 'active': ![], 'speed_value': 0x0, 'health_value': 0x0, 'odometr_value': 0x0, 'fuel_value': 0x0, 'engine': ![], 'doors': ![], 'lights': ![] }, 'methods': { 'visible'(_0x328263) { var _0x599a73 = _0x1a6b48; if (_0x328263 == 0x0) this[_0x599a73(0x162)] = ![]; else this[_0x599a73(0x162)] = !![]; } } }); cef['emit'](_0x1a6b48(0x166), _0x1a6b48(0x18d), ![]), cef[_0x1a6b48(0x17e)]('game:data:pollPlayerStats', !![], 0x32), cef['on'](_0x1a6b48(0x167), (_0x48d235, _0x4f137b, _0xc946b0, _0x3f8d31, _0x13a980, _0x58e210, _0x307a7f, _0x403072, _0x708002, _0x425ead) => { var _0x2fadf8 = _0x1a6b48; hud['wanted'] = _0x2fadf8(0x17f) + _0x13a980 + _0x2fadf8(0x189), hud[_0x2fadf8(0x164)] = Math[_0x2fadf8(0x188)](_0x48d235), hud[_0x2fadf8(0x18a)] = Math[_0x2fadf8(0x188)](_0xc946b0), hud[_0x2fadf8(0x15f)] = _0x2fadf8(0x176) + _0x58e210 + _0x2fadf8(0x189), hud['weaponName'] = '' + GetWeapon(_0x58e210), hud['ammo'] = _0x307a7f + '/', hud[_0x2fadf8(0x191)] = '' + (_0x403072 - _0x307a7f), hud[_0x2fadf8(0x175)] = moneyFormat(_0x708002), setSpeed(_0x425ead); }), cef['on']('hud:active', _0x457c58 => hud['visible'](_0x457c58)), cef['on'](_0x1a6b48(0x172), (_0x506e5f, _0x1f47cd, _0x4763ae) => { var _0x1717bb = _0x1a6b48; hud['server'] = '' + _0x506e5f, hud[_0x1717bb(0x169)] = _0x1f47cd, hud[_0x1717bb(0x160)] = _0x4763ae; }), cef['on'](_0x1a6b48(0x173), _0xf256bb => speedometer['visible'](_0xf256bb)), cef['on'](_0x1a6b48(0x18b), _0x243f87 => speedometer[_0x1a6b48(0x161)] = '' + Math[_0x1a6b48(0x188)](_0x243f87)), cef['on'](_0x1a6b48(0x16f), _0x1c45c6 => speedometer[_0x1a6b48(0x187)] = '' + _0x1c45c6), cef['on']('speedometer:indicator:fuel', _0x399328 => speedometer['fuel_value'] = '' + _0x399328), cef['on'](_0x1a6b48(0x184), (_0x2b55ec, _0xf659f5) => { var _0x2bf835 = _0x1a6b48; if (_0x2b55ec == 0x1) { if (_0xf659f5 == 0x0) speedometer['engine'] = ![]; else speedometer[_0x2bf835(0x180)] = !![]; } if (_0x2b55ec == 0x2) { if (_0xf659f5 == 0x0) speedometer[_0x2bf835(0x18e)] = ![]; else speedometer[_0x2bf835(0x18e)] = !![]; } if (_0x2b55ec == 0x3) { if (_0xf659f5 == 0x0) speedometer['lights'] = ![]; else speedometer[_0x2bf835(0x17a)] = !![]; } }); function _0x45c7() { var _0xcf1dee = ['.interface-hud', '408qGTJja', '3ldROmC', 'speedometer:indicator:icon', 'style', '%\x20500%;', 'odometr_value', 'round', '.png', 'armour', 'speedometer:indicator:health', '464XJrGRQ', 'interface', 'doors', 'length', '60276qaSGmk', 'max_ammo', 'weapon', 'playerId', 'health_value', 'active', 'getAttribute', 'health', '4663719TxABPu', 'game:hud:setComponentVisible', 'game:data:playerStats', 'slice', 'online', 'stroke-dasharray:\x20', '25LhLagS', 'strokeDashoffset', '12NGhJSy', '572671xDZGSC', 'speedometer:indicator:odometr', '10fpbmSm', 'updateArmour', 'hud:update', 'speedometer:active', '.interface-speedometer', 'money', 'images/hud/weapon/', 'undefined', '3312561QOtFZm', 'getElementById', 'lights', '7097296GABKjs', 'images/hud/weapon/0.png', '72538HttZJM', 'emit', 'images/hud/wanted/', 'engine']; _0x45c7 = function () { return _0xcf1dee; }; return _0x45c7(); } function _0x52e1(_0x23552d, _0x25238c) { var _0x45c795 = _0x45c7(); return _0x52e1 = function (_0x52e16d, _0xff84e6) { _0x52e16d = _0x52e16d - 0x15f; var _0x1ad8b2 = _0x45c795[_0x52e16d]; return _0x1ad8b2; }, _0x52e1(_0x23552d, _0x25238c); } function setSpeed(_0x28bdb6) { var _0x491084 = _0x1a6b48, _0x51b2b0 = Math[_0x491084(0x188)](0xbc / 0xaf * _0x28bdb6 / 1.05); document['getElementById']('speedometer')[_0x491084(0x185)] = _0x491084(0x16a) + _0x51b2b0 + _0x491084(0x186), speedometer['speed_value'] = Math[_0x491084(0x188)](_0x28bdb6); }я
function GetWeapon(weaponid) {
    switch (weaponid) {
        case 1:
            return 'Кастет';
            break;
        case 2:
            return 'Клюшка';
            break;
        case 3:
            return 'Дубинка';
            break;
        case 4:
            return 'Нож';
            break;
        case 5:
            return 'Бита';
            break;
        case 6:
            return 'Лопата';
            break;
        case 7:
            return 'Кий';
            break;
        case 8:
            return 'Катана';
            break;
        case 9:
            return 'Бензопила';
            break;
        case 10:
            return 'Двухсторонний Дилдо';
            break;
        case 11:
            return 'Дилдо';
            break;
        case 12:
            return 'Вибратор';
            break;
        case 13:
            return 'Вибратор 2';
            break;
        case 14:
            return 'Букет цветов';
            break;
        case 15:
            return 'Трость';
            break;
        case 16:
            return 'Граната';
            break;
        case 17:
            return 'Слезоточивый газ';
            break;
        case 18:
            return 'Коктейль Молотова';
            break;
        case 22:
            return 'Пистолет 9мм';
            break;
        case 23:
            return 'Пистолет 9мм';
            break;
        case 24:
            return 'Desert Eagle';
            break;
        case 25:
            return 'Дробовик';
            break;
        case 26:
            return 'Обрез';
            break;
        case 27:
            return 'Скорострельный дробовик';
            break;
        case 28:
            return 'Узи';
            break;
        case 29:
            return 'МП5';
            break;
        case 30:
            return 'Ak-47';
            break;
        case 31:
            return 'Винтовка M4';
            break;
        case 32:
            return 'Тес-9';
            break;
        case 33:
            return 'Охотничье ружье';
            break;
        case 34:
            return 'Снайперская винтовка';
            break;
        case 35:
            return 'РПГ';
            break;
        case 36:
            return 'Самонаводящиеся ракеты';
            break;
        case 37:
            return 'Огнемет';
            break;
        case 38:
            return 'Миниган';
            break;
        case 39:
            return 'Сумка с тротилом';
            break;
        case 40:
            return 'Детонатор к сумке';
            break;
        case 41:
            return 'Баллончик с краской';
            break;
        case 42:
            return 'Огнетушитель';
            break;
        case 43:
            return 'Фотоаппарат';
            break;
        case 44:
            return 'Прибор ночного видения';
            break;
        case 45:
            return 'Тепловизор';
            break;
        case 46:
            return 'Парашют';
            break;
        default:
            return '';
    }
}