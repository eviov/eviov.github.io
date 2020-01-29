(function() {var implementors = {};
implementors["rmp_serde"] = [{text:"impl&lt;'a, W:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> + 'a&gt; <a class=\"trait\" href=\"serde/ser/trait.SerializeStruct.html\" title=\"trait serde::ser::SerializeStruct\">SerializeStruct</a> for <a class=\"struct\" href=\"rmp_serde/encode/struct.Compound.html\" title=\"struct rmp_serde::encode::Compound\">Compound</a>&lt;'a, W&gt;",synthetic:false,types:["rmp_serde::encode::Compound"]},{text:"impl&lt;'a, S&gt; <a class=\"trait\" href=\"serde/ser/trait.SerializeStruct.html\" title=\"trait serde::ser::SerializeStruct\">SerializeStruct</a> for &amp;'a mut <a class=\"struct\" href=\"rmp_serde/ext/struct.StructMapSerializer.html\" title=\"struct rmp_serde::ext::StructMapSerializer\">StructMapSerializer</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"rmp_serde/encode/trait.UnderlyingWrite.html\" title=\"trait rmp_serde::encode::UnderlyingWrite\">UnderlyingWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'b mut </a>S: <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&lt;Ok = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error = <a class=\"enum\" href=\"rmp_serde/encode/enum.Error.html\" title=\"enum rmp_serde::encode::Error\">Error</a>&gt;,&nbsp;</span>",synthetic:false,types:["rmp_serde::ext::StructMapSerializer"]},{text:"impl&lt;'a, S&gt; <a class=\"trait\" href=\"serde/ser/trait.SerializeStruct.html\" title=\"trait serde::ser::SerializeStruct\">SerializeStruct</a> for &amp;'a mut <a class=\"struct\" href=\"rmp_serde/ext/struct.StructTupleSerializer.html\" title=\"struct rmp_serde::ext::StructTupleSerializer\">StructTupleSerializer</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"rmp_serde/encode/trait.UnderlyingWrite.html\" title=\"trait rmp_serde::encode::UnderlyingWrite\">UnderlyingWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'b mut </a>S: <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&lt;Ok = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error = <a class=\"enum\" href=\"rmp_serde/encode/enum.Error.html\" title=\"enum rmp_serde::encode::Error\">Error</a>&gt;,&nbsp;</span>",synthetic:false,types:["rmp_serde::ext::StructTupleSerializer"]},];
implementors["serde"] = [];
implementors["serde_urlencoded"] = [{text:"impl&lt;'input, 'output, Target&gt; <a class=\"trait\" href=\"serde/ser/trait.SerializeStruct.html\" title=\"trait serde::ser::SerializeStruct\">SerializeStruct</a> for <a class=\"struct\" href=\"serde_urlencoded/ser/struct.StructSerializer.html\" title=\"struct serde_urlencoded::ser::StructSerializer\">StructSerializer</a>&lt;'input, 'output, Target&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Target: 'output + <a class=\"trait\" href=\"url/form_urlencoded/trait.Target.html\" title=\"trait url::form_urlencoded::Target\">UrlEncodedTarget</a>,&nbsp;</span>",synthetic:false,types:["serde_urlencoded::ser::StructSerializer"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()