/* start module: implementation */
$pyjs['loaded_modules']['implementation'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['implementation']['__was_initialized__']) return $pyjs['loaded_modules']['implementation'];
	var $m = $pyjs['loaded_modules']['implementation'];
	$m['__repr__'] = function() { return '<module: implementation>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'implementation';
	$m['__name__'] = __mod_name__;


	$m['re'] = $p['___import___']('re', null);
	$m['driver'] = function(l, p) {
		var lang,f,dic,$pyjs_try_err,path,data;
		dic = $p['dict']([]);
		lang = l;
		path = p;
		try {
			f = $p['open'](path);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
				$p['printFunc'](['No File/Directory Found'], 1);
				return 0;
			}
		}
		data = f['read']();
		dic['__setitem__']('LOC', $p['list']((typeof LOC == "undefined"?$m['LOC']:LOC)(lang, data)));
		dic['__setitem__']('NOM', $p['list']((typeof NOM == "undefined"?$m['NOM']:NOM)(lang, data)));
		dic['__setitem__']('WMC', (typeof WMC == "undefined"?$m['WMC']:WMC)(lang, data));
		dic['__setitem__']('cyclometric', (typeof cyclometric == "undefined"?$m['cyclometric']:cyclometric)(lang, data));
		dic['__setitem__']('fanout', (typeof fanOut == "undefined"?$m['fanOut']:fanOut)(lang, data));
		dic['__setitem__']('fanin', (typeof fanIn == "undefined"?$m['fanIn']:fanIn)(lang, data));
		dic['__setitem__']('hk', (typeof henryKafura == "undefined"?$m['henryKafura']:henryKafura)(lang, data));
		return dic;
	};
	$m['driver']['__name__'] = 'driver';

	$m['driver']['__bind_type__'] = 0;
	$m['driver']['__args__'] = [null,null,['l'],['p']];
	$m['LOC'] = function(lang, data) {
		var $or4,program,$or6,$or1,$or5,$or3,$or2,$add2,$add3,LOC,$add1,Ncom,$floordiv1,$add4,$sub3,$sub2,$sub1,$sub4,$floordiv2;
		if ($p['bool'](($p['bool']($or1=$p['op_eq'](lang, 'c'))?$or1:($p['bool']($or2=$p['op_eq'](lang, 'cpp'))?$or2:($p['bool']($or3=$p['op_eq'](lang, 'java'))?$or3:($p['bool']($or4=$p['op_eq'](lang, 'csharp'))?$or4:($p['bool']($or5=$p['op_eq'](lang, 'php'))?$or5:$p['op_eq'](lang, 'javascript')))))))) {
			Ncom = $p['__op_add']($add1=data['count']('//'),$add2=data['count']('/*'));
			program = $m['re']['sub']($m['re']['compile']('/\\*.*?\\*/', $p['getattr']($m['re'], 'DOTALL')), '', data);
			program = $m['re']['sub']($m['re']['compile']('//.*?\n'), '', program);
			program = program['$$replace']('{', ';');
			program = program['strip']()['$$split'](';');
			LOC = $p['__op_sub']($sub1=$p['len'](program),$sub2=1);
			return $p['tuple']([Ncom, LOC]);
		}
		else if ($p['bool']($p['op_eq'](lang, 'python'))) {
			Ncom = $p['__op_add']($add3=(typeof ($floordiv1=data['count']("'''"))==typeof ($floordiv2=2) && typeof $floordiv1=='number' && $floordiv2 !== 0?
				Math['floor']($floordiv1/$floordiv2):
				$p['op_floordiv']($floordiv1,$floordiv2)),$add4=data['count']('#'));
			program = $m['re']['sub']($m['re']['compile']("'''.*?'''", $p['getattr']($m['re'], 'DOTALL')), '', data);
			program = $m['re']['sub']($m['re']['compile']('#.*?\n'), '', program);
			program = program['$$replace']('\t', '');
			program = program['strip']()['$$split']('\n');
			LOC = $p['__op_sub']($sub3=$p['len'](program),$sub4=1);
			return $p['tuple']([Ncom, LOC]);
		}
		return null;
	};
	$m['LOC']['__name__'] = 'LOC';

	$m['LOC']['__bind_type__'] = 0;
	$m['LOC']['__args__'] = [null,null,['lang'],['data']];
	$m['NOM'] = function(lang, data) {
		var nom,ans1,nstruct,outmethods,ans,functions,funct,scope,$sub6,$sub5,$or10,a,$or7,$or9,$or8,$add10,c,b,nclass,classnum,$add6,$add7,$add5,$or11,$add8,$add9;
		data = $m['re']['sub']($m['re']['compile']('/\\*.*?\\*/', $p['getattr']($m['re'], 'DOTALL')), '', data);
		data = $m['re']['sub']($m['re']['compile']('//.*?\n'), '', data);
		if ($p['bool'](($p['bool']($or7=$p['op_eq'](lang, 'c'))?$or7:($p['bool']($or8=$p['op_eq'](lang, 'cpp'))?$or8:$p['op_eq'](lang, 'php'))))) {
			a = $m['re']['compile']('class.*?}\\s*;', $p['getattr']($m['re'], 'DOTALL'));
			ans = a['findall'](data);
			data = $m['re']['sub'](a, '', data);
			b = $m['re']['compile']('struct.*?}\\s*;', $p['getattr']($m['re'], 'DOTALL'));
			ans1 = b['findall'](data);
			data = $m['re']['sub'](b, '', data);
			nstruct = $p['len'](ans);
			nclass = $p['len'](ans1);
			c = $m['re']['compile']('\\)\\s*\n*{.*?}', $p['getattr']($m['re'], 'DOTALL'));
			functions = c['findall'](data);
			scope = data['count']('::');
			outmethods = $p['__op_sub']($sub5=$p['len'](functions),$sub6=scope);
			nom = $p['__op_add']($add7=$p['__op_add']($add5=nstruct,$add6=nclass),$add8=outmethods);
			return $p['tuple']([nom, nstruct, nclass, outmethods]);
		}
		else if ($p['bool'](($p['bool']($or10=$p['op_eq'](lang, 'java'))?$or10:$p['op_eq'](lang, 'csharp')))) {
			classnum = $p['__op_add']($add9=data['count']('class '),$add10=data['count']('interface'));
			return $p['tuple']([classnum, 0, classnum, 0]);
		}
		else if ($p['bool']($p['op_eq'](lang, 'javascript'))) {
			funct = data['count']('function ');
			return $p['tuple']([funct, 0, 0, funct]);
		}
		else if ($p['bool']($p['op_eq'](lang, 'python'))) {
			funct = data['count']('class ');
			if ($p['bool']($p['op_eq'](funct, 0))) {
				funct = data['count']('def');
			}
			return $p['tuple']([funct, 0, funct, 0]);
		}
		return null;
	};
	$m['NOM']['__name__'] = 'NOM';

	$m['NOM']['__bind_type__'] = 0;
	$m['NOM']['__args__'] = [null,null,['lang'],['data']];
	$m['WMC'] = function(lang, data) {
		var $iter3_array,$iter1_iter,classname,d,ans,ind,$iter2_type,$sub8,tmp,functions,$iter3_idx,$iter2_iter,$iter3_nextval,$sub9,$pyjs_try_err,$iter1_array,$sub7,$iter3_iter,a,$iter1_nextval,$sub10,$iter2_idx,$add11,$add12,$iter3_type,mod,c,$iter2_nextval,$iter1_type,dic,$or15,$or14,$or16,$iter1_idx,$or13,$or12,functions1,$iter2_array;
		data = $m['re']['sub']($m['re']['compile']('/\\*.*?\\*/', $p['getattr']($m['re'], 'DOTALL')), '', data);
		data = $m['re']['sub']($m['re']['compile']('//.*?\n'), '', data);
		if ($p['bool']($p['op_eq'](lang, 'python'))) {
			dic = $p['dict']([]);
			a = $m['re']['compile']('class\\s*', $p['getattr']($m['re'], 'DOTALL'));
			data = a['$$split'](data);
			data = $p['__getslice'](data, 1, null);
			$iter1_iter = data;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				mod = $iter1_nextval['$nextval'];
				try {
					ind = mod['index'](':');
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						continue;
					}
				}
				classname = $p['__getslice'](mod, 0, (typeof index == "undefined"?$m['index']:index));
				dic['__setitem__'](classname, mod['count']('def'));
			}
			return dic;
		}
		else if ($p['bool'](($p['bool']($or12=$p['op_eq'](lang, 'c'))?$or12:($p['bool']($or13=$p['op_eq'](lang, 'cpp'))?$or13:$p['op_eq'](lang, 'php'))))) {
			dic = $p['dict']([]);
			a = $m['re']['compile']('class.*?}\n*\\s*;', $p['getattr']($m['re'], 'DOTALL'));
			ans = a['findall'](data);
			$iter2_iter = ans;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				mod = $iter2_nextval['$nextval'];
				tmp = mod['$$split'](' ');
				classname = tmp['__getitem__'](1);
				c = $m['re']['compile']('\\(.*?\\)\n*\\s*;', $p['getattr']($m['re'], 'DOTALL'));
				functions = c['findall'](mod);
				d = $m['re']['compile']('\\(.*?\\)\n*\\s*{', $p['getattr']($m['re'], 'DOTALL'));
				functions1 = d['findall'](mod);
				dic['__setitem__'](classname, $p['__op_sub']($sub9=$p['__op_sub']($sub7=$p['__op_add']($add11=$p['len'](functions),$add12=$p['len'](functions1)),$sub8=mod['count']('scanf')),$sub10=mod['count']('printf')));
			}
			return dic;
		}
		else if ($p['bool']($p['op_eq'](lang, 'javascript'))) {
			dic = $p['dict']([]);
			dic['__setitem__']('OUTSIDE', data['count']('function '));
			return dic;
		}
		else if ($p['bool'](($p['bool']($or15=$p['op_eq'](lang, 'java'))?$or15:$p['op_eq'](lang, 'csharp')))) {
			dic = $p['dict']([]);
			data['$$replace']('interface', 'class');
			a = $m['re']['compile']('class\\s*', $p['getattr']($m['re'], 'DOTALL'));
			data = a['$$split'](data);
			data = $p['__getslice'](data, 1, null);
			$iter3_iter = data;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				mod = $iter3_nextval['$nextval'];
				a = $m['re']['compile']('\\(.*?\\)\n*\\s*{', $p['getattr']($m['re'], 'DOTALL'));
				functions = a['findall'](mod);
				mod = mod['$$split'](' ');
				dic['__setitem__'](mod['__getitem__'](0), $p['len'](functions));
			}
			return dic;
		}
		return null;
	};
	$m['WMC']['__name__'] = 'WMC';

	$m['WMC']['__bind_type__'] = 0;
	$m['WMC']['__args__'] = [null,null,['lang'],['data']];
	$m['cyclometric'] = function(lang, data) {
		var $iter4_type,$add26,$iter4_iter,$add28,$add21,$add20,$add23,$add22,$add25,$add24,$add27,prog,ln1,$add14,$add15,$add16,$add17,cyclo,$add13,line,$add18,$add19,i,$iter4_nextval,$iter4_idx,ln,$iter4_array;
		data = $m['re']['sub']($m['re']['compile']('/\\*.*?\\*/', $p['getattr']($m['re'], 'DOTALL')), '', data);
		data = $m['re']['sub']($m['re']['compile']('//.*?\n'), '', data);
		cyclo = 0;
		prog = data['$$split']('\r\n');
		$iter4_iter = $p['enumerate'](prog);
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
		while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
			var $tupleassign1 = $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
			i = $tupleassign1[0];
			line = $tupleassign1[1];
			ln = $m['re']['search']('if', line);
			if ($p['bool'](!$p['op_eq'](ln, null))) {
				cyclo = $p['__op_add']($add13=cyclo,$add14=1);
			}
			ln = $m['re']['search']('while', line);
			if ($p['bool'](!$p['op_eq'](ln, null))) {
				cyclo = $p['__op_add']($add15=cyclo,$add16=1);
			}
			ln = $m['re']['search']('for', line);
			if ($p['bool'](!$p['op_eq'](ln, null))) {
				cyclo = $p['__op_add']($add17=cyclo,$add18=1);
			}
			ln = $m['re']['search']('switch', line);
			if ($p['bool'](!$p['op_eq'](ln, null))) {
				cyclo = $p['__op_add']($add19=cyclo,$add20=1);
			}
			ln = $m['re']['search']('break', line);
			if ($p['bool'](!$p['op_eq'](ln, null))) {
				cyclo = $p['__op_add']($add21=cyclo,$add22=1);
			}
			ln = $m['re']['search']('&&', line);
			if ($p['bool'](!$p['op_eq'](ln, null))) {
				cyclo = $p['__op_add']($add23=cyclo,$add24=1);
			}
			ln = $m['re']['search']('\\|\\|', line);
			if ($p['bool'](!$p['op_eq'](ln, null))) {
				cyclo = $p['__op_add']($add25=cyclo,$add26=1);
			}
			ln = $m['re']['search']('else', line);
			if ($p['bool'](!$p['op_eq'](ln, null))) {
				ln1 = $m['re']['search']('if', line);
				if ($p['bool']($p['op_eq'](ln1, null))) {
					cyclo = $p['__op_add']($add27=cyclo,$add28=1);
				}
			}
		}
		return cyclo;
	};
	$m['cyclometric']['__name__'] = 'cyclometric';

	$m['cyclometric']['__bind_type__'] = 0;
	$m['cyclometric']['__args__'] = [null,null,['lang'],['data']];
	$m['fanOut'] = function(lang, data) {
		var $iter5_nextval,$iter12_type,$iter10_nextval,$iter11_iter,$iter6_type,$iter5_idx,$iter11_nextval,$iter11_array,classname,$iter5_iter,$add34,ans,ind,$iter5_type,$iter6_iter,fanin,$iter10_iter,hjk,$iter6_nextval,tmp,$iter9_array,$iter9_iter,ln,$iter10_idx,$add31,$iter9_nextval,$iter9_idx,$pyjs_try_err,call,$iter5_array,prog,$iter12_nextval,$iter7_type,$iter9_type,a,$iter8_idx,$iter6_idx,$iter11_type,$iter7_iter,$iter8_type,$iter12_array,$iter6_array,inst,$iter8_nextval,$iter7_idx,line,mod,$iter8_iter,c,$iter11_idx,num,$iter7_nextval,$add32,$add33,$add30,$iter7_array,$iter8_array,$iter10_array,dic,$iter12_iter,$add29,$or17,fanout,$iter10_type,allinst,$iter12_idx,$or18;
		data = $m['re']['sub']($m['re']['compile']('/\\*.*?\\*/', $p['getattr']($m['re'], 'DOTALL')), '', data);
		data = $m['re']['sub']($m['re']['compile']('//.*?\n'), '', data);
		fanout = 0;
		data = $m['re']['sub']($m['re']['compile']('/\\*.*?\\*/', $p['getattr']($m['re'], 'DOTALL')), '', data);
		data = $m['re']['sub']($m['re']['compile']('//.*?\n'), '', data);
		if ($p['bool']($p['op_eq'](lang, 'cpp'))) {
			dic = $p['dict']([]);
			a = $m['re']['compile']('class.*?}\n*\\s*;', $p['getattr']($m['re'], 'DOTALL'));
			ans = a['findall'](data);
			$iter5_iter = ans;
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				mod = $iter5_nextval['$nextval'];
				tmp = mod['$$split'](' ');
				classname = tmp['__getitem__'](1);
				c = $m['re']['compile']('[a-zA-Z]\\w*\\.[a-zA-Z]\\w*');
				inst = c['findall'](mod);
				allinst = $p['list']([]);
				$iter6_iter = inst;
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					call = $iter6_nextval['$nextval'];
					hjk = call['$$split']('.');
					allinst['append'](hjk['__getitem__'](0));
				}
				num = $p['len']($p['list']($p['set'](allinst)));
				dic['__setitem__'](classname, num);
			}
			return dic;
		}
		else if ($p['bool']($p['op_eq'](lang, 'python'))) {
			dic = $p['dict']([]);
			a = $m['re']['compile']('class\\s*', $p['getattr']($m['re'], 'DOTALL'));
			data = a['$$split'](data);
			data = $p['__getslice'](data, 1, null);
			$iter7_iter = data;
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				mod = $iter7_nextval['$nextval'];
				try {
					ind = mod['index'](':');
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						continue;
					}
				}
				classname = $p['__getslice'](mod, 0, (typeof index == "undefined"?$m['index']:index));
				c = $m['re']['compile']('[a-zA-Z]+\\.[a-zA-Z]+');
				inst = c['findall'](mod);
				allinst = $p['list']([]);
				$iter8_iter = inst;
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					call = $iter8_nextval['$nextval'];
					hjk = call['$$split']('.');
					allinst['append'](hjk['__getitem__'](0));
				}
				num = $p['len']($p['list']($p['set'](allinst)));
				dic['__setitem__'](classname, num);
			}
			return dic;
		}
		else if ($p['bool'](($p['bool']($or17=$p['op_eq'](lang, 'java'))?$or17:$p['op_eq'](lang, 'csharp')))) {
			dic = $p['dict']([]);
			data['$$replace']('interface', 'class');
			a = $m['re']['compile']('class\\s*', $p['getattr']($m['re'], 'DOTALL'));
			data = a['$$split'](data);
			data = $p['__getslice'](data, 1, null);
			$iter9_iter = data;
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				mod = $iter9_nextval['$nextval'];
				fanin = 0;
				prog = mod['$$split']('\n');
				$iter10_iter = prog;
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					line = $iter10_nextval['$nextval'];
					ln = $m['re']['search'](' new ', line);
					if ($p['bool'](!$p['op_eq'](ln, null))) {
						fanin = $p['__op_add']($add29=fanin,$add30=1);
					}
					if ($p['bool']($p['op_eq'](lang, 'java'))) {
						ln = $m['re']['search']('\\.newInstance', line);
						if ($p['bool'](!$p['op_eq'](ln, null))) {
							fanin = $p['__op_add']($add31=fanin,$add32=1);
						}
					}
				}
				dic['__setitem__']($p['__getslice'](prog['__getitem__'](0), 0, (typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))), fanin);
			}
		}
		else if ($p['bool']($p['op_eq'](lang, 'php'))) {
			dic = $p['dict']([]);
			a = $m['re']['compile']('class.*?}\n*\\s*;', $p['getattr']($m['re'], 'DOTALL'));
			ans = a['findall'](data);
			$iter11_iter = ans;
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
				mod = $iter11_nextval['$nextval'];
				tmp = mod['$$split'](' ');
				classname = tmp['__getitem__'](1);
				prog = mod['$$split']('\n');
				fanin = 0;
				$iter12_iter = prog;
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
					line = $iter12_nextval['$nextval'];
					ln = $m['re']['search'](' new ', line);
					if ($p['bool'](!$p['op_eq'](ln, null))) {
						fanin = $p['__op_add']($add33=fanin,$add34=1);
					}
				}
				dic['__setitem__'](classname, fanin);
			}
		}
		return dic;
	};
	$m['fanOut']['__name__'] = 'fanOut';

	$m['fanOut']['__bind_type__'] = 0;
	$m['fanOut']['__args__'] = [null,null,['lang'],['data']];
	$m['fanIn'] = function(lang, data) {
		var prog1,key,$iter13_type,classname,$iter13_idx,ans,$iter15_idx,tmp,$add35,$iter15_iter,prog,mod,$iter13_array,a,$iter14_array,$iter14_type,$iter15_array,$iter14_iter,$iter14_idx,$iter14_nextval,$iter13_nextval,$iter13_iter,$add36,dic,$iter15_nextval,$iter15_type;
		data = $m['re']['sub']($m['re']['compile']('/\\*.*?\\*/', $p['getattr']($m['re'], 'DOTALL')), '', data);
		data = $m['re']['sub']($m['re']['compile']('//.*?\n'), '', data);
		dic = $p['dict']([]);
		prog1 = data;
		if ($p['bool']($p['op_eq'](lang, 'java'))) {
			data['$$replace']('interface', 'class');
		}
		if ($p['bool']($p['op_eq'](lang, 'php'))) {
			a = $m['re']['compile']('class.*?}\n*\\s*;', $p['getattr']($m['re'], 'DOTALL'));
			ans = a['findall'](data);
			$iter13_iter = ans;
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				mod = $iter13_nextval['$nextval'];
				tmp = mod['$$split'](' ');
				classname = tmp['__getitem__'](1);
				dic['__setitem__'](classname, (typeof ($usub2=1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
			}
		}
		else {
			a = $m['re']['compile']('class\\s*', $p['getattr']($m['re'], 'DOTALL'));
			data = a['$$split'](data);
			data = $p['__getslice'](data, 1, null);
			$iter14_iter = data;
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
				mod = $iter14_nextval['$nextval'];
				prog = mod['$$split']('\n');
				dic['__setitem__']($p['__getslice'](prog['__getitem__'](0), 0, (typeof ($usub4=1)=='number'?
					-$usub4:
					$p['op_usub']($usub4))), (typeof ($usub3=1)=='number'?
					-$usub3:
					$p['op_usub']($usub3)));
			}
		}
		$iter15_iter = dic;
		$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
		while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
			key = $iter15_nextval['$nextval'];
			$p['printFunc']([prog1['count'](key)], 1);
			dic['__setitem__'](key, $p['__op_add']($add35=dic['__getitem__'](key),$add36=prog1['count'](key)));
		}
		return dic;
	};
	$m['fanIn']['__name__'] = 'fanIn';

	$m['fanIn']['__bind_type__'] = 0;
	$m['fanIn']['__args__'] = [null,null,['lang'],['data']];
	$m['henryKafura'] = function(lang, data) {
		var $iter16_array,$add38,$pow1,$iter16_type,h,$add37,$iter16_idx,fanout,$pyjs_try_err,key,$iter16_nextval,fanin,$iter16_iter,$mul2,$mul1,$pow2;
		fanin = $m['fanIn'](lang, data);
		fanout = $m['fanOut'](lang, data);
		h = 0;
		$iter16_iter = fanin;
		$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
		while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
			key = $iter16_nextval['$nextval'];
			try {
				h = $p['__op_add']($add37=h,$add38=(typeof ($pow1=(typeof ($mul1=fanin['__getitem__'](key))==typeof ($mul2=fanout['__getitem__'](key)) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)))==typeof ($pow2=2) && typeof $pow1=='number'?
					Math['pow']($pow1,$pow2):
					$p['op_pow']($pow1,$pow2)));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					continue;
				}
			}
		}
		return h;
	};
	$m['henryKafura']['__name__'] = 'henryKafura';

	$m['henryKafura']['__bind_type__'] = 0;
	$m['henryKafura']['__args__'] = [null,null,['lang'],['data']];
	return this;
}; /* end implementation */


/* end module: implementation */


/*
PYJS_DEPS: ['re']
*/
