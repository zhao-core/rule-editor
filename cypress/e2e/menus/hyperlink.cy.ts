import Editor from '../../../src/editor'

describe('菜单-超链接', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/rule-editor/')

    cy.get('canvas').first().as('canvas').should('have.length', 1)
  })

  const text = 'rule-editor'
  const url = 'https://github.com/zhao-core/rule-editor'

  it('超链接', () => {
    cy.getEditor().then((editor: Editor) => {
      editor.command.executeSelectAll()

      editor.command.executeBackspace()

      cy.get('.menu-item__hyperlink').click()

      cy.get('.dialog-option__item [name="name"]').type(text)

      cy.get('.dialog-option__item [name="url"]').type(url)

      cy.get('.dialog-menu button')
        .eq(1)
        .click()
        .then(() => {
          const data = editor.command.getValue().data.main

          expect(data[0].type).to.eq('hyperlink')

          expect(data[0].url).to.eq(url)

          expect(data[0]?.valueList?.[0].value).to.eq(text)
        })
    })
  })
})
