#!/bin/zsh
#https://graphql.contentstack.com/stacks/blt8d430a87cb9b3e64?environment=production
quicktype   --graphql-introspect "http://localhost:3000/api/schema" \
            --graphql-schema ../src/graphql/cs/cs.gqlschema  