#!/usr/bin/env bash
mkdir -p bin && em++ scripts/cAPI/re2Wrapper.cc foundation/re2.cc foundation/filtered_re2.cc foundation/prefilter_tree.cc foundation/regexp.cc foundation/stringpiece.cc foundation/unicode_*.cc foundation/perl_groups.cc foundation/parse.cc foundation/rune.cc foundation/simplify.cc foundation/compile.cc foundation/prog.cc foundation/nfa.cc foundation/onepass.cc foundation/prefilter.cc foundation/dfa.cc foundation/bitstate.cc foundation/tostring.cc -o bin/re2Lib.js -s MODULARIZE=1 -s LINKABLE=1 -s EXPORT_ALL=1 -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='["stringToUTF8", "UTF8ToString"]' -s WASM_ASYNC_COMPILATION=1 -s ALLOW_MEMORY_GROWTH=1 -s NODEJS_CATCH_EXIT=0  -O3
echo 'DONE'
